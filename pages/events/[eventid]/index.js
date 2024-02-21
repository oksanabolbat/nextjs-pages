import EventContent from "@/components/events/event-content";
import EventLogistics from "@/components/events/event-logistics";
import EventSummary from "@/components/events/event-summary";
import ErrorAlert from "@/components/ui/error-alert";

import {
    getAllEvents,
    getEventById,
    getStaticEventsPaths,
} from "@/helpers/api-utils";
import { useRouter } from "next/router";

export default function EventPage(props) {
    // const params = useRouter();

    // const event = getEventById(params.query.eventid);
    // if (!event) {
    //     return (
    //         <ErrorAlert>
    //             <p>Sorry, no event found!</p>
    //         </ErrorAlert>
    //     );
    // }
    // console.log(event);
    const event = props.event;
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

export async function getStaticPaths() {
    const paths = await getStaticEventsPaths();

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    console.log("context:", context.params.eventid);
    const eventId = context.params.eventid;
    const event = await getEventById(eventId);

    console.log("EVENT ", event);
    return { props: { event: event } };
}
