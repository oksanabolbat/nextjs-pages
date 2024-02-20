import EventsList from "@/components/events/events-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/data";
import { useRouter } from "next/router";

export default function FilteredEventsPage() {
    const params = useRouter();
    // console.log(params.query.slug);
    const filteredParams = params.query.slug;
    if (filteredParams) {
        console.log(filteredParams[0], filteredParams[1]);
        const year = +filteredParams[0];
        const month = +filteredParams[1];

        if (
            isNaN(year) ||
            isNaN(month) ||
            year > 2030 ||
            year < 2020 ||
            month < 1 ||
            month > 12
        ) {
            return (
                <>
                    <ErrorAlert>
                        <p className="center">
                            Invalid filter. Please adjust you values
                        </p>
                    </ErrorAlert>
                    <div className="center">
                        <Button href="/events">Show all events</Button>
                    </div>
                </>
            );
        }
        const events = getFilteredEvents({
            year,
            month,
        });
        console.log(events);
        if (!events || events.length === 0) {
            return (
                <>
                    <p>No events found for chosen filter</p>;
                    <div className="center">
                        <Button href="/events">Show all events</Button>
                    </div>
                </>
            );
        }

        const date = new Date(year, month - 1);

        return (
            <div>
                <ResultsTitle date={date} />
                <EventsList events={events} />;
            </div>
        );
    } else {
        return <p className="center">Loading</p>;
    }
}
