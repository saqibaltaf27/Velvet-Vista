// This function returns formatted local time for a given timezone.

export function getLocalTime(timezone) {
    return new Date().toLocaleString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        weekday: "short",
    });
}