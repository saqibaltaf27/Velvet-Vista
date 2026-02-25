# Velvet & Vista - Implementation Guide

## Overview
Velvet & Vista is a luxury interactive guest journery interface for "bipolar weddings," where events occur across two different destinations. Guests can visualize itinerary, check local times, see weather and track journey Progress.

## Updating the Itinerary

This app reads events from: src/data/itinerary.json

## Destination Object

Each destination must include:

```json
{
    "id": "unique_id",
    "name": "Destination Name",
    "timezone": "TimeZoneString(e.g., Europe/Lisbon)",
    "themeColor": "any_color_identifier",
    "events": [...]
}
```
## Event Object
Each event inside the events array must include:

```json
{
    "id": 1,
    "title": "Event Title",
    "type": "Logistics" | "celebration",
    "datetime": "YYYY-MM-DDTHH:MM:SS",
    "description": "Event Description"
}
```

## Minimum Requirements
- At least 2 destinations
- At least 3 events per destination
- "type" determines if it shows in logistics or celebration mode

## Adding Destination Images
- Place images in : public/destinations/
- File names must match destination id. e.g portugal.jpg, morocco.jpg
- Images are displayed by DestinationHeader.jsx with Luxury Overlay

## API Key (Weather)
- Weather is fetched using OpenWeather API
- Add key to .env in project root: VITE_OPENWEATHER_API_KEY=your_api_key

It handles loading and error states automatically.