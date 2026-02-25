import { getLocalTime } from "../utils/timeUtils.js";
import WeatherCard from "./WeatherCard";

export default function EventCard({ event, timezone, city }) {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-5 transition hover:shadow-xl">
            <h3 className="font-serifLuxury text-xl mb-2">{event.tile}</h3>
            <p className="text-sm text-gray-500">{event.description}</p>
            <div className="mt-3 text-sm">
                <p>Local Time: {getLocalTime(timezone)}</p>
                <WeatherCard city={city} />
            </div>
        </div>
    );
}