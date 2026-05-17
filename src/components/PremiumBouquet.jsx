import { motion } from "framer-motion";
import { memo } from "react";

function CSSFlower({ type = "rose", className = "", delay = 0, scale = 1 }) {
  const isSun = type === "sunflower";
  const isLily = type === "lily";
  const isPeony = type === "peony";
  const petalCount = isSun ? 18 : isLily ? 7 : isPeony ? 16 : 20;

  const petalClass = isSun
    ? "from-yellow-200 via-amber-400 to-orange-500"
    : isLily
      ? "from-white via-pink-100 to-fuchsia-200"
      : isPeony
        ? "from-pink-100 via-rose-300 to-fuchsia-400"
        : "from-rose-200 via-rose-500 to-red-900";

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.25, y: 100, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale, y: [0, -7, 0], filter: "blur(0px)" }}
      transition={{
        opacity: { delay, duration: 0.8 },
        scale: { delay, duration: 1.1, ease: "easeOut" },
        y: { delay: delay + 1.1, duration: 4.2, repeat: Infinity, ease: "easeInOut" },
        filter: { delay, duration: 0.8 },
      }}
    >
      <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44">
        <motion.div
          className="absolute inset-0 rounded-full bg-pink-300/25 blur-2xl"
          animate={{ scale: [0.9, 1.18, 0.9], opacity: [0.25, 0.7, 0.25] }}
          transition={{ duration: 3.8, repeat: Infinity, delay }}
        />

        {Array.from({ length: petalCount }).map((_, index) => {
          const angle = (360 / petalCount) * index;
          const length = isSun
            ? "h-14 w-6 sm:h-16 sm:w-7"
            : isLily
              ? "h-16 w-8 sm:h-20 sm:w-10"
              : isPeony
                ? "h-14 w-8 sm:h-16 sm:w-9"
                : "h-12 w-7 sm:h-14 sm:w-8";
          const radius = isSun ? 42 : isLily ? 34 : isPeony ? 38 : 34;

          return (
            <span
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            >
              <motion.span
                className={`block ${length} origin-bottom rounded-[80%_20%_70%_30%] bg-gradient-to-b ${petalClass} shadow-[inset_-8px_-8px_18px_rgba(0,0,0,0.18),inset_8px_8px_18px_rgba(255,255,255,0.35),0_8px_18px_rgba(0,0,0,0.18)]`}
                animate={{ rotate: [0, index % 2 === 0 ? 3 : -3, 0], scaleY: [1, 1.05, 1] }}
                transition={{
                  duration: 3.5 + (index % 4) * 0.2,
                  repeat: Infinity,
                  delay: delay + index * 0.03,
                }}
              />
            </span>
          );
        })}

        {Array.from({ length: isSun ? 10 : 8 }).map((_, index) => (
          <span
            key={`inner-${index}`}
            className={`absolute left-1/2 top-1/2 h-9 w-5 origin-bottom rounded-[80%_20%_70%_30%] bg-gradient-to-b ${petalClass} opacity-95 shadow-[inset_4px_4px_12px_rgba(255,255,255,0.28)] sm:h-10 sm:w-6`}
            style={{
              transform: `translate(-50%, -100%) rotate(${
                (360 / (isSun ? 10 : 8)) * index + 12
              }deg) translateY(-20px)`,
            }}
          />
        ))}

        <motion.div
          className={`absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-12 sm:w-12 ${
            isSun
              ? "bg-gradient-to-br from-amber-800 via-yellow-900 to-stone-950"
              : "bg-gradient-to-br from-yellow-100 via-amber-300 to-orange-500"
          } shadow-[inset_-8px_-8px_14px_rgba(0,0,0,0.22),inset_5px_5px_10px_rgba(255,255,255,0.35),0_0_18px_rgba(251,191,36,0.65)]`}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, delay }}
        >
          {isSun &&
            Array.from({ length: 16 }).map((_, dot) => (
              <span
                key={dot}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-yellow-300/80"
                style={{
                  transform: `translate(-50%, -50%) rotate(${dot * 24}deg) translateY(14px)`,
                }}
              />
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

function Stem({ rotate = 0, height = 260, delay = 0 }) {
  return (
    <div
      className="absolute bottom-28 left-1/2 origin-bottom"
      style={{ height, width: 9, transform: `translateX(-50%) rotate(${rotate}deg)` }}
    >
      <motion.div
        className="relative h-full w-full origin-bottom rounded-full bg-gradient-to-r from-emerald-950 via-emerald-500 to-lime-300 shadow-[inset_4px_0_8px_rgba(255,255,255,0.22)]"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay, duration: 1.2, ease: "easeOut" }}
      >
        <motion.span
          className="absolute left-[-28px] top-[42%] h-10 w-20 -rotate-[32deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-emerald-300 via-emerald-600 to-emerald-950 shadow-[inset_7px_7px_12px_rgba(255,255,255,0.18)] sm:left-[-34px] sm:h-12 sm:w-24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.45, duration: 0.7 }}
        />
        <motion.span
          className="absolute right-[-28px] top-[58%] h-10 w-20 rotate-[32deg] rounded-[0_100%_0_100%] bg-gradient-to-bl from-lime-200 via-emerald-600 to-emerald-950 shadow-[inset_-7px_7px_12px_rgba(255,255,255,0.18)] sm:right-[-34px] sm:h-12 sm:w-24"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.6, duration: 0.7 }}
        />
      </motion.div>
    </div>
  );
}

function PremiumBouquet() {
  return (
    <motion.div
      className="relative mx-auto h-[470px] w-full max-w-[520px] sm:h-[560px] sm:max-w-[590px]"
      initial={{ opacity: 0, scale: 0.88, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        className="absolute left-1/2 top-[47%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-300/25 via-fuchsia-400/[0.15] to-violet-500/25 blur-2xl sm:h-[430px] sm:w-[430px]"
        animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.55, 0.95, 0.55] }}
        transition={{ duration: 5.5, repeat: Infinity }}
      />

      <div className="absolute inset-x-0 bottom-16 h-[310px] sm:bottom-20 sm:h-[340px]">
        <Stem rotate={-25} height={230} delay={0.2} />
        <Stem rotate={-15} height={270} delay={0.32} />
        <Stem rotate={-5} height={305} delay={0.44} />
        <Stem rotate={6} height={295} delay={0.56} />
        <Stem rotate={16} height={270} delay={0.68} />
        <Stem rotate={26} height={235} delay={0.8} />
      </div>

      <CSSFlower type="rose" className="left-[6%] top-[20%] z-20" delay={1.15} scale={0.72} />
      <CSSFlower type="peony" className="left-[28%] top-[8%] z-30" delay={1.3} scale={0.86} />
      <CSSFlower type="sunflower" className="right-[8%] top-[18%] z-20" delay={1.45} scale={0.72} />
      <CSSFlower type="lily" className="left-[43%] top-[28%] z-40" delay={1.6} scale={0.76} />
      <CSSFlower type="rose" className="right-[29%] top-[4%] z-30" delay={1.75} scale={0.68} />

      <motion.div
        className="absolute bottom-[58px] left-1/2 z-[60] h-28 w-52 -translate-x-1/2 rounded-full bg-roseglow/20 blur-2xl"
        initial={{ opacity: 0, scale: 0.35 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      />

      <motion.div
        className="absolute bottom-[72px] left-1/2 z-[60] flex -translate-x-1/2 items-center justify-center sm:bottom-[84px]"
        initial={{ scale: 0, rotate: -14 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 160 }}
      >
        <div className="h-10 w-32 rounded-full bg-gradient-to-r from-rose-900 via-pink-600 to-fuchsia-700 shadow-[inset_8px_8px_16px_rgba(255,255,255,0.24),0_12px_28px_rgba(0,0,0,0.28)] sm:h-12 sm:w-36" />
        <div className="absolute -left-14 h-14 w-20 rounded-[80%_20%_80%_20%] bg-gradient-to-br from-rose-700 via-pink-500 to-fuchsia-800 shadow-xl sm:-left-16 sm:h-16 sm:w-24" />
        <div className="absolute -right-14 h-14 w-20 rounded-[20%_80%_20%_80%] bg-gradient-to-bl from-rose-700 via-pink-500 to-fuchsia-800 shadow-xl sm:-right-16 sm:h-16 sm:w-24" />
        <div className="absolute h-10 w-10 rounded-full bg-gradient-to-br from-pink-200 via-rose-500 to-rose-900 shadow-[inset_6px_6px_12px_rgba(255,255,255,0.3)] sm:h-11 sm:w-11" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-40 h-16 w-40 -translate-x-1/2 rounded-[50%] bg-black/25 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
      />

      {Array.from({ length: 24 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute z-[70] rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]"
          style={{
            left: `${18 + ((index * 13) % 66)}%`,
            top: `${4 + ((index * 17) % 48)}%`,
            width: 3 + (index % 4),
            height: 3 + (index % 4),
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.7, 0.4] }}
          transition={{
            duration: 1.8 + (index % 4) * 0.3,
            repeat: Infinity,
            delay: index * 0.16,
          }}
        />
      ))}
    </motion.div>
  );
}

export default memo(PremiumBouquet);
