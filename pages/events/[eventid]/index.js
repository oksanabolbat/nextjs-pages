import EventContent from "@/components/events/event-content";
import EventLogistics from "@/components/events/event-logistics";
import EventSummary from "@/components/events/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById } from "@/data";
import { useRouter } from "next/router";

export default function EventPage() {
    const params = useRouter();

    const event = getEventById(params.query.eventid);
    if (!event) {
        return (
            <ErrorAlert>
                <p>Sorry, no event found!</p>
            </ErrorAlert>
        );
    }
    console.log(event);
    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
}
