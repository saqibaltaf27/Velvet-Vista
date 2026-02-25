export default function ProgressTracker({ progress }) {
    return (
        <div className="my-6 px-6">
            <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-black rounded-full transition-all duration-500" style={{width: `${progress}%`}} />
            </div>
        </div>
    );
}