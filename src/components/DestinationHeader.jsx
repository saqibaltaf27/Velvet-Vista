import { motion } from "framer-motion";

// Destination Header
// Luxury Themed section header for each location.
// It uses High Quality background imagery + Overlay + Smooth fade transition.

export default function DestinationHeader({ name, image }) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 40}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 0.6}}
        className="relative w-full h-56 md:h-72 rounded-3xl overflow-hidden shadow-xl mb-8">
            {/* Background Image */}
            <img
            src={image}
            alt={name}
            className="w-full h-full object-cover scale-150 hover:scale-110 transition-transform duration-700" />

            {/* Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />

            {/* Title */}
            <div className="absolute bottom-6 left-6">
                <h2 className="text-white text-2xl md:text-3xl font-serifLuxury tracking-wide">{name}</h2>
            </div>

        </motion.div>
    );
    
}