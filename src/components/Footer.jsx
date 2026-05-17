import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.14] bg-white/10 px-6 py-16 shadow-bloom backdrop-blur-xl sm:px-12"
        >
          <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-champagne/20 blur-3xl" />
          <motion.div
            className="relative mx-auto mb-8 grid h-24 w-24 place-items-center rounded-full border border-white/[0.15] bg-white/[0.12]"
            animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="h-10 w-10 fill-roseglow text-roseglow" />
            <Sparkles className="absolute -right-2 -top-1 h-6 w-6 text-champagne" />
          </motion.div>
          <h2 className="relative font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Dear Fiona, may your life keep opening like petals, soft, powerful,
            bright, and impossible to ignore.
          </h2>
        </motion.div>
        <p className="mt-8 text-sm text-white/50">
          Made with care, flowers, and a little universe of love.
        </p>
      </div>
    </footer>
  );
}
