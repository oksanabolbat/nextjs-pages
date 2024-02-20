import Link from "next/link";
import classes from "./button.module.css";

export default function Button({ href, children }) {
    if (href) {
        return (
            <Link href={href} className={classes.btn}>
                {children}
            </Link>
        );
    } else {
        return <button className={classes.btn}>{children}</button>;
    }
}
