import { Clock, Moon, SunMedium } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function getTimeMessage(hour) {
  if (hour >= 5 && hour < 12) {
    return "Good morning, beautiful soul. May today bloom softly for you.";
  }
  if (hour >= 12 && hour < 17) {
    return "I hope your day is treating you gently.";
  }
  if (hour >= 17 && hour < 21) {
    return "As the evening settles, I hope you feel loved and appreciated.";
  }
  return "Even under quiet stars, you remain unforgettable.";
}

export default function LiveTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formatted = useMemo(
    () => ({
      time: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      date: now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      line: getTimeMessage(now.getHours()),
    }),
    [now],
  );

  const isDay = now.getHours() >= 6 && now.getHours() < 18;

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="glass mx-auto grid max-w-6xl gap-8 rounded-[2rem] p-6 sm:p-8 md:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-champagne">
            <Clock className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-champagne/90">
            This very moment
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
            Someone is thinking of you.
          </h2>
        </div>
        <div className="rounded-[1.5rem] border border-white/[0.12] bg-midnight/[0.35] p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-5xl font-semibold text-white sm:text-6xl">
                {formatted.time}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                {formatted.date}
              </p>
            </div>
            <motion.div
              className="grid h-12 w-12 flex-none place-items-center rounded-full bg-white/10 text-champagne"
              animate={{ rotate: isDay ? [0, 10, 0] : [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {isDay ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
          </div>
          <p className="mt-6 text-lg leading-8 text-rose-50/90">{formatted.line}</p>
        </div>
      </motion.div>
    </section>
  );
}
