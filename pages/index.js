import EventsList from "@/components/events/events-list";
import { getFeaturedEvents } from "@/data";

export default function MainPage() {
    const events = getFeaturedEvents();
    return (
        <div>
            {" "}
            <h1>Hello</h1>
            <EventsList events={events} />
        </div>
    );
}
