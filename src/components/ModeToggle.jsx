export default function ModeToggle({mode, setMode}) {
    return (
        <div className="flex justify-center gap-4 my-6">
            {["all", "logistics", "celebration"].map((type) => (
                <button
                key={type}
                onClick={() => setMode(type)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    mode === type
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300"
                }`}>
                    {type.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
