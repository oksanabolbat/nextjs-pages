import Image from "next/image";

import classes from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventItem({ event }) {
    const { title, image, id } = event;
    const date = new Date(event.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const location = event.location.replace(", ", "\n");

    console.log(`/images/${image}`);
    return (
        <li className={classes.item}>
            <Image
                src={`/images/${image}`}
                alt={title}
                width={200}
                height={200}
            />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{date}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{location}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button href={`/events/${id}`}>
                        <span>Explore event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}
