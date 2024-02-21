export async function getAllEvents() {
    const response = await fetch(
        "https://events-95d8a-default-rtdb.firebaseio.com/events.json"
    );
    const data = await response.json();
    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key],
        });
    }
    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured === "true");
}

export async function getEventById(id) {
    console.log("ID", id);
    const allEvents = await getAllEvents();
    const event = allEvents.find((el) => el.id === id);

    return event;
}
export async function getStaticEventsPaths() {
    const allEvents = await getAllEvents();
    const paths = [];
    allEvents.forEach((event) => paths.push({ params: { eventid: event.id } }));

    return paths;
}
