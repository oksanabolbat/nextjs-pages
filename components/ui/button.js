import Link from "next/link";
import classes from "./button.module.css";

export default function Button({ href, children }) {
    return (
        <Link href={href} className={classes.btn}>
            {children}
        </Link>
    );
}
