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

function getDubaiLine(hour) {
  if (hour >= 5 && hour < 12) {
    return "Good morning, my love. May this Sunday hold you softly and remind you that you are cherished.";
  }
  if (hour >= 12 && hour < 17) {
    return "This Sunday afternoon, I hope your heart feels peaceful, trusted, and lovingly seen.";
  }
  if (hour >= 17 && hour < 21) {
    return "As Sunday evening settles in Dubai, I hope you feel held by my love.";
  }
  return "Even under Sunday night's quiet sky, you are still my sweetest thought.";
}

function LoveClock({ time, date, line, hour, minute, second }) {
  const hourAngle = ((hour % 12) + minute / 60) * 30;
  const minuteAngle = (minute + second / 60) * 6;
  const secondAngle = second * 6;

  return (
    <div className="mt-8 flex flex-col items-center gap-5 rounded-[2rem] border border-champagne/25 bg-white/[0.09] p-6 text-center shadow-[0_0_48px_rgba(247,217,156,0.2),0_0_70px_rgba(255,111,157,0.16),inset_0_0_32px_rgba(255,255,255,0.06)] backdrop-blur-xl sm:flex-row sm:text-left">
      <motion.div
        className="relative h-32 w-32 flex-none rounded-full border border-champagne/40 bg-gradient-to-br from-white/15 via-roseglow/15 to-midnight/35 shadow-[0_0_36px_rgba(247,217,156,0.36),inset_0_0_28px_rgba(255,255,255,0.12)]"
        animate={{
          boxShadow: [
            "0 0 26px rgba(247,217,156,0.25), inset 0 0 24px rgba(255,255,255,0.1)",
            "0 0 48px rgba(255,111,157,0.38), inset 0 0 32px rgba(255,255,255,0.16)",
            "0 0 26px rgba(247,217,156,0.25), inset 0 0 24px rgba(255,255,255,0.1)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((tick) => (
          <span
            key={tick}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-champagne"
            style={{
              transform: `translate(-50%, -50%) rotate(${tick * 30}deg) translateY(-50px)`,
            }}
          />
        ))}
        <motion.span
          className="absolute left-1/2 top-1/2 h-10 w-1 origin-bottom rounded-full bg-rose-100"
          style={{
            transform: `translate(-50%, -100%) rotate(${hourAngle}deg)`,
          }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 h-12 w-0.5 origin-bottom rounded-full bg-champagne"
          style={{
            transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)`,
          }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 h-12 w-px origin-bottom rounded-full bg-roseglow"
          style={{
            transform: `translate(-50%, -100%) rotate(${secondAngle}deg)`,
          }}
        />
        <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-champagne to-roseglow shadow-bloom" />
        <Heart className="absolute bottom-6 left-1/2 h-4 w-4 -translate-x-1/2 fill-roseglow text-roseglow" />
      </motion.div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-rose-100/80">
          Sunday morning for Fiona
        </p>
        <p className="font-display text-3xl font-semibold text-white sm:text-4xl">{time}</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-champagne/80">
          {date}
        </p>
        <p className="mt-4 text-base leading-7 text-rose-50/85">{line}</p>
      </div>
    </div>
  );
}

export default function SimpleFlowerUniverse() {
  const [now, setNow] = useState(() => new Date());
  const [messageOffset, setMessageOffset] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

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

  const dubai = useMemo(() => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dubai",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour12: true,
    }).formatToParts(now);

    const value = (type) => parts.find((part) => part.type === type)?.value ?? "";
    const hour24 = Number(
      new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dubai",
        hour: "numeric",
        hourCycle: "h23",
      }).format(now),
    );

    return {
      time: `${value("hour")}:${value("minute")}:${value("second")} ${value("dayPeriod")}`,
      date: `${value("weekday")}, ${value("month")} ${value("day")}, ${value("year")}`,
      line: getDubaiLine(hour24),
      hour: hour24,
      minute: Number(value("minute")),
      second: Number(value("second")),
    };
  }, [now]);

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

          <LoveClock {...dubai} />
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
