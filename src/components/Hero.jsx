import { ArrowDown, Heart, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const bouquetImages = [
  "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=700&q=85",
];

export default function Hero() {
  const scrollToGarden = () => {
    document.getElementById("flower-garden")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/10 px-4 py-2 text-sm text-petal shadow-gold backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-champagne" />
            Kenya to Dubai, still close where it matters
          </div>
          <h1 className="font-display text-5xl font-bold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Fiona Mwose, this garden was made for you.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-rose-50/90 sm:text-xl">
            Some people deserve ordinary flowers. You deserve a whole universe
            blooming softly around you.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
            Whenever distance feels loud, open this little sky and remember:
            my care is still here, patient and present, crossing every mile.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <motion.button
              type="button"
              onClick={scrollToGarden}
              whileHover={{ scale: 1.035, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-roseglow via-pink-400 to-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-midnight shadow-bloom transition"
            >
              Open Your Flowers
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
            </motion.button>
            <div className="inline-flex items-center gap-3 text-sm text-white/70">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.15] bg-white/10">
                <Heart className="h-4 w-4 fill-roseglow text-roseglow" />
              </span>
              A private flower universe for your girlfriend.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-[0.86] w-full max-w-[560px]"
        >
          <div className="absolute inset-8 rounded-full bg-roseglow/30 blur-3xl" />
          <div className="absolute inset-16 rounded-full bg-champagne/20 blur-3xl" />
          {bouquetImages.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt="A romantic bouquet of flowers"
              loading={index === 0 ? "eager" : "lazy"}
              className={`bouquet-mask absolute rounded-[2rem] object-cover shadow-bloom ${
                index === 0
                  ? "left-[17%] top-[5%] h-[68%] w-[62%]"
                  : index === 1
                    ? "bottom-[6%] left-[3%] h-[45%] w-[48%]"
                    : "bottom-[4%] right-[2%] h-[50%] w-[48%]"
              }`}
              animate={{
                y: [0, index % 2 ? 16 : -14, 0],
                rotate: [index * 4 - 5, index * 4 + 3, index * 4 - 5],
              }}
              transition={{
                duration: 7 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <motion.div
            className="glass absolute bottom-8 left-1/2 flex w-[86%] -translate-x-1/2 items-center gap-3 rounded-2xl p-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <MapPin className="h-5 w-5 flex-none text-champagne" />
            <p className="text-sm leading-6 text-white/80">
              For the woman building her future in Dubai, from the man still
              cheering for her in Kenya.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
