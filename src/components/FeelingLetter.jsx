import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FeelingLetter() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
        className="glass relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-14"
      >
        <motion.div
          className="absolute right-8 top-8 text-champagne"
          animate={{ rotate: [0, 10, -5, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart className="h-8 w-8 fill-roseglow text-roseglow" />
        </motion.div>
        <Sparkles className="mb-5 h-7 w-7 text-champagne" />
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne/90">
          How I Feel About You
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-6xl">
          A letter for the quiet moments.
        </h2>
        <p className="mt-8 font-script text-2xl leading-10 text-rose-50/90 sm:text-3xl sm:leading-[3rem]">
          Fiona, I may not always find the perfect words, but I know this: you
          are special to me in a way that feels calm, beautiful, and real. You
          have this softness, this light, this quiet magic that makes you
          unforgettable. I wanted this little universe of flowers to remind you
          that you deserve love, peace, joy, and everything beautiful life can
          offer.
        </p>
      </motion.div>
    </section>
  );
}
