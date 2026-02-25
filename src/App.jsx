import { useState } from "react";
import itinerary from './data/itinerary.json';
import Timeline from "./components/Timeline";
import ModeToggle from "./components/ModeToggle";
import ProgressTracker from "./components/ProgressTracker";

export default function App() {
  const [mode, setMode] = useState("all");
  const [sliderValue, setSliderValue] = useState(0);
  const progress = sliderValue;
  return (
    <div className="min-h-screen-pb-20">
      <header className="text-center py-10">
        <h1 className="font-serifLuxury text-4xl">Velvet & Vista Guest Journey</h1>
      </header>

      <ModeToggle mode={mode} setMode={setMode} />

      <ProgressTracker progress={progress} />

      <div className="px-6">
        <input 
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => setSliderValue(Number(e.target.value))}
        className="w-full" />

      </div>
      {itinerary.destination && itinerary.destination.length > 0 ? (
      <Timeline destinations={itinerary.destination} mode={mode} /> ) : (
        <p className="text-center mt-10 text-gray-500">No destinations Avaialble</p>
      )}

    </div>
  );

}