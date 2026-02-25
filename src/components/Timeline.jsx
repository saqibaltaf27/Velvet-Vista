import EventCard from "./EventCard";
import DestinationHeader from "./DestinationHeader";

export default function Timeline({ destinations = [], mode }) {
    // Add a loading or empty state check
    if (!destinations || destinations.length === 0) {
        return (
            <div className="space-y-12 px-4 text-center py-8">
                <p className="text-gray-500">No destinations available</p>
            </div>
        );
    }

    return (
        <div className="space-y-12 px-4">
            {destinations.map((destination) => (
                <div key={destination.id}>
                    <DestinationHeader
                        name={destination.name}
                        image={`/destinations/${destination.id}.jpg`} 
                    />
                    
                    <div className="space-y-6">
                        {destination.events
                            .filter((event) => mode === "all" || event.type === mode)
                            .map((event) => (
                                <EventCard
                                    key={event.id}
                                    event={event}
                                    timezone={destination.timezone}
                                    city={destination.id === "portugal" ? "Lisbon" : "Casablanca"} 
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}