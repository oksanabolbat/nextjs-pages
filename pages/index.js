import EventsList from "@/components/events/events-list";
import { getFeaturedEvents } from "@/helpers/api-utils";

export default function MainPage(props) {
    const events = props.events;

    return (
        <div>
            {" "}
            <h1>Hello</h1>
            <EventsList events={events} />
        </div>
    );
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return { props: { events: featuredEvents } };
}
