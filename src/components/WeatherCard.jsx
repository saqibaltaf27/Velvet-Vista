import useWeather from "../hooks/useWeather";

export default function WeatherCard({ city }) {
    const { weather, loading, error } = useWeather(city);
    if (loading) return <p className="text-sm">Loading Weather...</p>;
    if(error) return <p className="text-sm text-red-500">Weather Unavailable..</p>;

    return (
        <p className="text-sm">
            {weather.main.temp}°C | {weather.weather[0].description}
        </p>
    );
}