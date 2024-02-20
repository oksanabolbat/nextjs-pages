import EventsList from "@/components/events/events-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/data";
import { useRouter } from "next/navigation";

export default function MainPage() {
    const events = getAllEvents();
    const router = useRouter();
    const findEventsHandler = (year, month) => {
        router.push(`/events/${year}/${month}`);
    };
    return (
        <div>
            <h2>All Events</h2>
            <EventsSearch onSearch={findEventsHandler} />
            <EventsList events={events} />
        </div>
    );
}
