import { motion } from "framer-motion";
import { loveNotes } from "../data.js";

export default function FloatingNotes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] hidden overflow-hidden lg:block">
      {loveNotes.map((note, index) => (
        <motion.div
          key={note}
          className="absolute max-w-[230px] rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs leading-5 text-white/70 shadow-gold backdrop-blur-md"
          style={{
            left: `${5 + ((index * 17) % 84)}%`,
            top: `${10 + ((index * 23) % 78)}%`,
          }}
          animate={{
            y: [0, index % 2 ? 28 : -28, 0],
            x: [0, index % 3 ? -16 : 18, 0],
            opacity: [0, 0.72, 0.72, 0],
          }}
          transition={{
            duration: 10 + (index % 5),
            delay: index * 0.75,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {note}
        </motion.div>
      ))}
    </div>
  );
}
