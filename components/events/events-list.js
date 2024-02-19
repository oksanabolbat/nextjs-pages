import EventItem from "./event-item";
import classes from "./events-list.module.css";

export default function EventsList(props) {
    const { events } = props;
    return (
        <ul className={classes.list}>
            {events.map((event) => (
                <EventItem event={event} key={event.id} />
            ))}
        </ul>
    );
}
