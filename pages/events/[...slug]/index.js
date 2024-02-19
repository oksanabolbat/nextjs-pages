import { useRouter } from "next/router";

export default function FilteredEventsPage() {
    const params = useRouter();
    console.log(params.query.slug);
    return <div>Filtered events page</div>;
}
