import { motion } from "framer-motion";
import { useState } from "react";
import SimpleFlowerUniverse from "./components/SimpleFlowerUniverse.jsx";
import TerminalIntro from "./components/TerminalIntro.jsx";
import { petalSeeds, sparkleSeeds } from "./data.js";

function BackgroundMagic() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-cosmos" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(7,8,22,0.42)_72%)]" />
      {sparkleSeeds.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute rounded-full bg-champagne shadow-gold"
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{ opacity: [0.15, 0.95, 0.2], scale: [0.75, 1.7, 0.8] }}
          transition={{
            duration: 3.4,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {petalSeeds.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute -top-12 h-5 w-3 rounded-bl-full rounded-tr-full bg-gradient-to-br from-petal via-rose-200 to-roseglow/80 opacity-70 blur-[0.2px]"
          style={{ left: petal.left }}
          animate={{
            y: ["-8vh", "112vh"],
            x: [0, petal.id % 2 ? 42 : -38, petal.id % 3 ? 16 : -12],
            rotate: [0, petal.rotate, petal.rotate * 2],
            opacity: [0, 0.78, 0.58, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-midnight font-body text-white">
      <BackgroundMagic />
      {!introComplete && <TerminalIntro onComplete={() => setIntroComplete(true)} />}
      {introComplete && (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.985, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <SimpleFlowerUniverse />
        </motion.div>
      )}
    </main>
  );
}
