import { useEffect, useState } from "react";
import axios from "axios";

// Custom Hook to fetch weather for a given city.
// It also handles loading and error states

export default function useWeather(city) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchWeather() {
            try {
                setLoading(true);
                const res = await axios.get(`
                    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`);
                setWeather(res.data);
                setError(false);
            } catch {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, [city]);

    return {
        weather,
        loading,
        error
    };
}