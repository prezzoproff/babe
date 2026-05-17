import { AnimatePresence, motion } from "framer-motion";
import { Flower2, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import { flowers } from "../data.js";

export default function FlowerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFlower = flowers[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % flowers.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="flower-garden" className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-sm text-petal backdrop-blur-xl">
            <Flower2 className="h-4 w-4 text-champagne" />
            A flower for every way you are loved
          </div>
          <h2 className="font-display text-4xl font-semibold text-white sm:text-6xl">
            A garden that keeps changing, the way every second keeps choosing you.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-1">
            {flowers.map((flower, index) => (
              <button
                key={flower.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  index === activeIndex
                    ? "border-champagne/70 bg-champagne/[0.15] text-white shadow-gold"
                    : "border-white/10 bg-white/10 text-white/60 hover:border-white/25 hover:bg-white/[0.15]"
                }`}
              >
                <span className="block font-semibold">{flower.name}</span>
                <span className="mt-1 block text-xs text-white/50">{flower.meaning.split(",")[0]}</span>
              </button>
            ))}
          </div>

          <div className="glass relative overflow-hidden rounded-[2rem] p-4 sm:p-6">
            <div className="absolute right-10 top-10 h-36 w-36 rounded-full bg-champagne/20 blur-3xl" />
            <div className="absolute bottom-8 left-12 h-44 w-44 rounded-full bg-roseglow/20 blur-3xl" />
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <motion.span
                key={item}
                className="absolute z-20 h-2 w-2 rounded-full bg-champagne"
                style={{ left: `${18 + item * 13}%`, top: `${15 + (item % 3) * 24}%` }}
                animate={{ opacity: [0.15, 1, 0.2], scale: [0.5, 1.8, 0.8] }}
                transition={{ duration: 2.8, delay: item * 0.35, repeat: Infinity }}
              />
            ))}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlower.name}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative z-10 grid gap-7 lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] shadow-bloom sm:h-[480px]">
                  <motion.img
                    src={activeFlower.image}
                    alt={activeFlower.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 0.72, y: 90, filter: "blur(9px)" }}
                    animate={{
                      opacity: 1,
                      scale: [0.72, 1.035, 1.01],
                      y: [90, -8, 0],
                      filter: "blur(0px)",
                    }}
                    transition={{ duration: 1.55, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-midnight/[0.45] via-transparent to-transparent"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0.55 }}
                    transition={{ duration: 1.2 }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-champagne/30 blur-md"
                    initial={{ scale: 0.35, opacity: 0 }}
                    animate={{ scale: [0.35, 1.15, 0.85], opacity: [0, 0.85, 0] }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute bottom-10 left-1/2 h-36 w-1.5 origin-bottom -translate-x-1/2 rounded-full bg-gradient-to-t from-emerald-900 via-emerald-400 to-champagne"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: [0, 1, 0.78], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.25, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute bottom-28 left-[48%] h-8 w-14 origin-right rounded-bl-full rounded-tr-full bg-emerald-300/70 blur-[0.1px]"
                    initial={{ scale: 0, rotate: -32, opacity: 0 }}
                    animate={{ scale: [0, 1, 0.8], rotate: [-32, -54, -44], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 1.25, delay: 0.2, ease: "easeOut" }}
                  />
                  <motion.span
                    className="absolute bottom-32 left-[50%] h-8 w-14 origin-left rounded-br-full rounded-tl-full bg-emerald-200/70 blur-[0.1px]"
                    initial={{ scale: 0, rotate: 28, opacity: 0 }}
                    animate={{ scale: [0, 1, 0.8], rotate: [28, 50, 42], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 1.25, delay: 0.28, ease: "easeOut" }}
                  />
                </div>
                <div className="flex flex-col justify-center p-2 sm:p-4">
                  <Sparkle className="mb-5 h-8 w-8 text-champagne" />
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne/90">
                    {activeFlower.meaning}
                  </p>
                  <h3 className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl">
                    {activeFlower.name}
                  </h3>
                  <p className="mt-6 text-xl leading-9 text-rose-50/90">
                    {activeFlower.message}
                  </p>
                  <p className="mt-6 text-base leading-7 text-white/60">
                    Every flower here is a small reminder: distance can separate
                    countries, but it does not have to silence tenderness.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
