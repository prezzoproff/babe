import { motion } from "framer-motion";
import { Heart, MapPin, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PremiumBouquet from "./PremiumBouquet.jsx";

const loveMessages = [
  "Good morning, my love.",
  "You are cherished, deeply.",
  "I trust you, and I choose you.",
  "Your Sunday flowers arrived softly.",
  "Rest today, my love. You are held.",
  "I am grateful for your heart.",
  "You are safe with my love.",
  "Dubai has you, but my heart is near.",
  "You make love feel calm and real.",
  "I am proud of the woman you are becoming.",
  "You are my favorite Sunday thought.",
  "Your smile still finds me in Kenya.",
  "No pressure, just my love beside you.",
  "You deserve peace, flowers, and softness.",
  "I want you to feel wanted, always.",
];

const notePositions = [
  { left: "4%", top: "14%" },
  { left: "68%", top: "7%" },
  { left: "1%", top: "47%" },
  { left: "72%", top: "43%" },
  { left: "14%", top: "78%" },
  { left: "62%", top: "82%" },
];

const sundayPromises = [
  "Loved",
  "Cherished",
  "Trusted",
  "Chosen",
];

function SundayAura() {
  return (
    <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-champagne/25 bg-gradient-to-br from-white/[0.12] via-roseglow/[0.08] to-champagne/[0.06] p-6 text-center shadow-[0_0_58px_rgba(247,217,156,0.2),0_0_90px_rgba(255,111,157,0.16),inset_0_0_36px_rgba(255,255,255,0.08)] backdrop-blur-xl">
      <motion.div
        className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-champagne/25 blur-3xl"
        animate={{ scale: [0.85, 1.2, 0.85], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-14 right-4 h-44 w-44 rounded-full bg-roseglow/25 blur-3xl"
        animate={{ scale: [1.1, 0.88, 1.1], opacity: [0.55, 0.25, 0.55] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10">
        <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full border border-champagne/35 bg-white/10 shadow-[0_0_42px_rgba(247,217,156,0.34)]">
          <motion.div
            className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-champagne via-pink-200 to-roseglow"
            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="h-7 w-7 fill-midnight text-midnight" />
          </motion.div>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne/90">
          Sunday softness for Fiona
        </p>
        <p className="mx-auto mt-4 max-w-xl font-script text-2xl leading-9 text-rose-50/95 sm:text-3xl sm:leading-10">
          May your morning feel slow, warm, and certain. No doubt, no pressure,
          just love that trusts you and keeps choosing you gently.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {sundayPromises.map((promise, index) => (
            <motion.div
              key={promise}
              className="rounded-2xl border border-white/[0.12] bg-midnight/35 px-3 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(247,217,156,0.12)]"
              animate={{ y: [0, index % 2 ? 5 : -5, 0], opacity: [0.86, 1, 0.86] }}
              transition={{ duration: 4.2 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              {promise}
            </motion.div>
          ))}
        </div>

        <motion.span
          className="mx-auto mt-6 block h-px w-44 bg-gradient-to-r from-transparent via-champagne to-transparent"
          animate={{ opacity: [0.35, 1, 0.35], scaleX: [0.7, 1.08, 0.7] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export default function SimpleFlowerUniverse() {
  const [messageOffset, setMessageOffset] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMessageOffset((offset) => (offset + 1) % loveMessages.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const audio = new Audio("/love-me-not.mp3");
    audio.volume = 0.58;
    audio.currentTime = 5;

    const loopSegment = () => {
      if (audio.currentTime >= 35) {
        audio.currentTime = 5;
        audio.play().catch(() => {
          // Keep quiet if the browser blocks a replay edge case.
        });
      }
    };

    audio.addEventListener("timeupdate", loopSegment);

    const timer = window.setTimeout(() => {
      audio.play().catch(() => {
        // Browsers require user-provided media and may block autoplay if the intro click is not carried across.
      });
    }, 1900);

    return () => {
      window.clearTimeout(timer);
      audio.removeEventListener("timeupdate", loopSegment);
      audio.pause();
    };
  }, []);

  const orbitNotes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, index) => loveMessages[(messageOffset + index) % loveMessages.length]),
    [messageOffset],
  );

  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-8 sm:px-8">
      <div className="absolute inset-x-0 top-0 mx-auto h-72 max-w-4xl rounded-full bg-champagne/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-roseglow/20 blur-3xl" />
      <div className="absolute left-10 top-1/3 h-48 w-48 rounded-full bg-pink-200/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-sm text-petal backdrop-blur-xl">
            <MapPin className="h-4 w-4 text-champagne" />
            Sunday flowers, shipped from Kenya to Dubai
          </div>
          <h1 className="font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
            Good morning, my love. Your Sunday flowers found you.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-rose-50/90 lg:mx-0">
            I want this morning to feel like peace around you: loved, cherished,
            trusted, and wanted by the man who keeps choosing you.
          </p>

          <SundayAura />
        </motion.div>

        <div className="relative mx-auto aspect-square w-full max-w-[680px]">
          {orbitNotes.map((note, index) => (
            <motion.div
              key={`${note}-${messageOffset}`}
              className="absolute z-[120] max-w-[210px] rounded-2xl border border-champagne/40 bg-midnight/70 px-4 py-2.5 text-center text-xs font-bold leading-5 text-white shadow-[0_0_24px_rgba(247,217,156,0.34),0_0_52px_rgba(255,111,157,0.18),inset_0_0_18px_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:rounded-full"
              style={{
                left: notePositions[index].left,
                top: notePositions[index].top,
              }}
              animate={{
                y: [0, index % 2 ? 12 : -12, 0],
                opacity: [0.78, 1, 0.78],
                boxShadow: [
                  "0 0 18px rgba(247,217,156,0.25), 0 0 34px rgba(255,111,157,0.12)",
                  "0 0 32px rgba(247,217,156,0.55), 0 0 68px rgba(255,111,157,0.28)",
                  "0 0 18px rgba(247,217,156,0.25), 0 0 34px rgba(255,111,157,0.12)",
                ],
              }}
              initial={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 5 + index * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              {note}
            </motion.div>
          ))}

          <PremiumBouquet />

          {[0, 1, 2, 3, 4, 5, 6, 7].map((sparkle) => (
            <motion.span
              key={sparkle}
              className="absolute z-[110] h-2 w-2 rounded-full bg-champagne shadow-gold"
              style={{
                left: `${24 + ((sparkle * 17) % 54)}%`,
                top: `${18 + ((sparkle * 23) % 58)}%`,
              }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.8, 0.6] }}
              transition={{ duration: 2.4, delay: sparkle * 0.28, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        <Heart className="h-3.5 w-3.5 fill-roseglow text-roseglow" />
        <span>Made to keep you close, one second at a time.</span>
        <Sparkles className="h-3.5 w-3.5 text-champagne" />
      </motion.div>
    </section>
  );
}
