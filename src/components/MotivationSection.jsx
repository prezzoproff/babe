import { motion } from "framer-motion";
import { Gem, Plane, Sprout } from "lucide-react";

export default function MotivationSection() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75 }}
          className="rounded-[2rem] border border-white/[0.12] bg-white/[0.08] p-7 backdrop-blur-xl sm:p-10"
        >
          <Sprout className="mb-6 h-8 w-8 text-champagne" />
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne/90">
            For the Woman You Are Becoming
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-6xl">
            Keep blooming at your own pace.
          </h2>
          <p className="mt-7 text-lg leading-9 text-rose-50/90">
            Keep choosing yourself. Keep dreaming bigger. The world has not seen
            everything you carry yet. You are allowed to be soft and still
            powerful. You are allowed to rest and still rise. You are allowed to
            be loved without having to earn it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="glass grid content-between rounded-[2rem] p-7 sm:p-10"
        >
          <div>
            <Gem className="mb-6 h-8 w-8 text-champagne" />
            <h3 className="font-display text-3xl font-semibold text-white sm:text-5xl">
              Dubai may hold your dreams. Kenya still holds a heart that is
              proud of you.
            </h3>
            <p className="mt-7 text-lg leading-9 text-white/70">
              I hope this page becomes a small place you can return to when you
              miss home, when work is heavy, or when you simply need to remember
              that you are loved with intention.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/[0.12] bg-midnight/[0.35] p-4">
            <Plane className="h-6 w-6 flex-none text-champagne" />
            <p className="text-sm leading-6 text-white/70">
              Different countries. Same sky. Same affection, every second.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
