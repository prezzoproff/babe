import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Cpu,
  FileCode2,
  Folder,
  Plane,
  Terminal,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const editorSteps = [
  {
    file: "src/App.jsx",
    tab: "App.jsx",
    hint: "opening the universe shell",
    code: "const distance = { from: 'Kenya', to: 'Dubai' };\nconst promise = 'I will keep showing up';\nrender(<FionaUniverse distance={distance} />);",
  },
  {
    file: "src/love/FionaMwose.jsx",
    tab: "FionaMwose.jsx",
    hint: "writing the part that matters",
    code: "export function FionaMwose() {\n  return <LoveLetter name='Fiona' mood='soft, rare, unforgettable' />;\n}",
  },
  {
    file: "src/flowers/bloomEngine.js",
    tab: "bloomEngine.js",
    hint: "making flowers germinate",
    code: "seed.plant();\nstem.rise({ gently: true });\npetals.open({ for: 'Fiona Mwose', everySecond: true });",
  },
  {
    file: "src/animations/petals.js",
    tab: "petals.js",
    hint: "adding motion, sparkle, patience",
    code: "const petals = sky.map((star) => star.turnInto('flower'));\npetals.float({ speed: 'slow', feeling: 'real' });",
  },
  {
    file: "src/time/rightNow.js",
    tab: "rightNow.js",
    hint: "keeping the clock alive",
    code: "setInterval(() => {\n  heart.send('thinking of you');\n  clock.remindHer('you are loved');\n}, 1000);",
  },
  {
    file: "src/deploy/netlify.toml",
    tab: "netlify.toml",
    hint: "preparing the private launch",
    code: "[build]\n  command = 'npm run build'\n  publish = 'dist'\n\n# shipped with care",
  },
];

const terminalLines = [
  { prompt: "fiona-universe$", text: "npm run build" },
  { prompt: "vite$", text: "transforming petals, stars, roses, distance..." },
  {
    prompt: "vite$",
    text: "compiled with 0 heartbreaks and 1 private universe ❤️",
    highlight: true,
  },
  { prompt: "vite$", text: "npm run dev -- --for Fiona" },
  { prompt: "local$", text: "shipment ready: flowers packed for Fiona" },
];

function TypedText({ text, speed = 12 }) {
  const [visible, setVisible] = useState("");

  useEffect(() => {
    setVisible("");
    let index = 0;
    const timer = window.setInterval(() => {
      index += Math.ceil(Math.random() * 3);
      setVisible(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, speed);

    return () => window.clearInterval(timer);
  }, [speed, text]);

  return (
    <>
      {visible}
      <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-emerald-200" />
    </>
  );
}

function TerminalLine({ line, active }) {
  return (
    <div className="flex gap-3 text-xs leading-6 sm:text-sm">
      <span className="shrink-0 text-champagne/80">{line.prompt}</span>
      <span
        className={`font-mono ${
          line.highlight
            ? "font-bold text-emerald-300 drop-shadow-[0_0_14px_rgba(110,231,183,0.45)]"
            : "text-emerald-200"
        }`}
      >
        {active ? <TypedText text={line.text} speed={16} /> : line.text}
      </span>
    </div>
  );
}

function PlaneDelivery() {
  return (
    <motion.div
      className="grid min-h-[430px] place-items-center overflow-hidden p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-[7%] top-1/2 h-px w-[86%] -translate-y-1/2 bg-gradient-to-r from-champagne/20 via-champagne/80 to-roseglow/25" />
        <motion.div
          className="absolute left-[10%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-champagne shadow-gold"
          animate={{ scale: [1, 1.8, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-[10%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-roseglow shadow-bloom"
          animate={{ scale: [1, 1.8, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.25 }}
        />

        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.22em] text-white/70">
          <span>Kenya</span>
          <span>Dubai</span>
        </div>

        <motion.div
          className="relative mt-16 h-28"
          initial={false}
        >
          <motion.div
            className="absolute left-[8%] top-5 flex items-center gap-3 rounded-full border border-champagne/30 bg-white/10 px-5 py-3 text-champagne shadow-gold backdrop-blur-xl"
            animate={{
              x: ["0%", "245%", "520%"],
              y: [22, -36, 12],
              rotate: [-8, 8, -4],
            }}
            transition={{ duration: 3.1, ease: "easeInOut" }}
          >
            <Plane className="h-6 w-6 fill-champagne" />
            <span className="font-sans text-sm font-bold">flowers in flight</span>
          </motion.div>
        </motion.div>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-center font-display text-3xl font-semibold text-white sm:text-5xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Landing softly for my love.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function TerminalIntro({ onComplete }) {
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [editorIndex, setEditorIndex] = useState(0);
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [unfolding, setUnfolding] = useState(false);
  const audioContextRef = useRef(null);

  const activeStep = editorSteps[editorIndex];
  const terminalShown = useMemo(
    () => terminalLines.slice(0, Math.min(terminalIndex + 1, terminalLines.length)),
    [terminalIndex],
  );

  const playKeyClick = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const context = audioContextRef.current ?? new AudioContext();
    audioContextRef.current = context;

    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = 110 + Math.random() * 420;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.035);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.04);
  };

  const speakGreeting = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const voice = new SpeechSynthesisUtterance("Hey my love. Your flowers are being shipped.");
    voice.rate = 0.9;
    voice.pitch = 1.05;
    voice.volume = 0.75;
    window.speechSynthesis.speak(voice);
  };

  const handleStart = () => {
    setStarted(true);
    playKeyClick();
    speakGreeting();
  };

  useEffect(() => {
    if (!started) return undefined;

    setPhase("editor");
    setEditorIndex(0);
    setTerminalIndex(0);

    const editorTimer = window.setInterval(() => {
      setEditorIndex((index) => (index + 1) % editorSteps.length);
    }, 1450);

    const terminalTimer = window.setTimeout(() => {
      window.clearInterval(editorTimer);
      setPhase("terminal");
    }, 10000);

    return () => {
      window.clearInterval(editorTimer);
      window.clearTimeout(terminalTimer);
    };
  }, [started]);

  useEffect(() => {
    if (phase !== "editor") return undefined;

    const timer = window.setInterval(() => {
      playKeyClick();
      if (Math.random() > 0.62) {
        window.setTimeout(playKeyClick, 55 + Math.random() * 80);
      }
    }, 92);

    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "terminal") return undefined;

    if (terminalIndex >= terminalLines.length - 1) {
      const flightTimer = window.setTimeout(() => setPhase("flight"), 650);
      return () => {
        window.clearTimeout(flightTimer);
      };
    }

    const timer = window.setTimeout(
      () => setTerminalIndex((index) => index + 1),
      terminalIndex === 0 ? 580 : 520,
    );
    return () => window.clearTimeout(timer);
  }, [onComplete, phase, terminalIndex]);

  useEffect(() => {
    if (phase !== "flight") return undefined;

    const unfoldTimer = window.setTimeout(() => setUnfolding(true), 3200);
    const doneTimer = window.setTimeout(onComplete, 4550);
    return () => {
      window.clearTimeout(unfoldTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onComplete, phase]);

  return (
    <motion.section className="fixed inset-0 z-50 grid place-items-center overflow-hidden px-5 py-8">
      <div className="absolute inset-0 bg-cosmos" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(247,217,156,0.16),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(255,111,157,0.18),transparent_26%),rgba(5,7,18,0.38)]" />

      <AnimatePresence>
        {unfolding && (
          <motion.div
            className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,rgba(247,217,156,0.95),rgba(255,111,157,0.7)_18%,rgba(54,16,63,0.15)_42%,transparent_70%)]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 3.6, opacity: [0, 1, 0] }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="mb-6 text-center">
          <motion.div
            className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-white/[0.16] bg-white/10 shadow-gold backdrop-blur-xl"
            animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 className="h-7 w-7 text-champagne" />
          </motion.div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-champagne/90">
            Hello Fiona my love ❤️
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-6xl">
            I know you wanted flowers.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            Since I cannot bring them personally today, click the plane below
            and let me ship them to you from Kenya to Dubai.
          </p>
        </div>

        <div className="glass overflow-hidden rounded-[1.7rem]">
          <div className="flex items-center justify-between border-b border-white/[0.12] bg-black/30 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-roseglow" />
              <span className="h-3 w-3 rounded-full bg-champagne" />
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.45]">
              {phase === "terminal" ? <Terminal className="h-4 w-4" /> : phase === "flight" ? <Plane className="h-4 w-4" /> : <FileCode2 className="h-4 w-4" />}
              {phase === "terminal" ? "running build" : phase === "flight" ? "shipping flowers" : "visual studio code"}
            </div>
          </div>

          <div className="min-h-[430px] bg-[#050713]/[0.92] font-mono">
            {!started ? (
              <div className="grid min-h-[430px] place-items-center p-6 text-center">
                <motion.button
                  type="button"
                  onClick={handleStart}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-champagne via-pink-300 to-roseglow px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-midnight shadow-bloom"
                >
                  <Plane className="h-5 w-5 fill-midnight" />
                  Ship My Flowers
                </motion.button>
              </div>
            ) : phase === "editor" ? (
              <div className="grid min-h-[430px] md:grid-cols-[250px_1fr]">
                <aside className="hidden border-r border-white/[0.08] bg-white/[0.04] p-4 md:block">
                  <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/40">
                    <Folder className="h-4 w-4" />
                    fiona-universe
                  </div>
                  {editorSteps.map((step, index) => (
                    <motion.div
                      key={step.file}
                      className={`mb-2 flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                        index === editorIndex
                          ? "bg-champagne/[0.13] text-champagne"
                          : "text-white/45"
                      }`}
                      animate={index === editorIndex ? { x: [0, 4, 0] } : { x: 0 }}
                      transition={{ duration: 0.45 }}
                    >
                      <FileCode2 className="h-3.5 w-3.5" />
                      <span className="truncate">{step.file}</span>
                    </motion.div>
                  ))}
                </aside>

                <div className="flex min-w-0 flex-col">
                  <div className="flex gap-1 overflow-x-auto border-b border-white/[0.08] bg-white/[0.035] px-3 pt-3">
                    {editorSteps.slice(0, Math.min(editorIndex + 2, editorSteps.length)).map((step) => (
                      <div
                        key={step.tab}
                        className={`rounded-t-lg px-4 py-2 text-xs ${
                          step.tab === activeStep.tab
                            ? "bg-[#050713] text-white"
                            : "bg-white/[0.04] text-white/45"
                        }`}
                      >
                        {step.tab}
                      </div>
                    ))}
                  </div>

                  <div className="grid flex-1 gap-5 p-4 sm:p-6 lg:grid-cols-[1fr_260px]">
                    <AnimatePresence mode="wait">
                      <motion.pre
                        key={activeStep.file}
                        className="min-h-[260px] overflow-hidden rounded-2xl border border-white/[0.08] bg-black/25 p-5 text-left text-xs leading-6 text-emerald-100 sm:text-sm"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                      >
                        <span className="mb-4 block text-champagne/80">// {activeStep.hint}</span>
                        <TypedText text={activeStep.code} speed={10} />
                      </motion.pre>
                    </AnimatePresence>

                    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
                      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-champagne">
                        <Cpu className="h-4 w-4" />
                        live build vibe
                      </div>
                      {["routing affection", "painting petals", "animating sparkles", "checking Fiona smile"].map(
                        (item, index) => (
                          <div key={item} className="mb-4">
                            <div className="mb-1 flex justify-between text-xs text-white/55">
                              <span>{item}</span>
                              <span>{Math.min(99, editorIndex * 16 + index * 9 + 18)}%</span>
                            </div>
                            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                              <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-champagne"
                                animate={{ width: `${Math.min(99, editorIndex * 16 + index * 9 + 18)}%` }}
                                transition={{ duration: 0.45 }}
                              />
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : phase === "flight" ? (
              <PlaneDelivery />
            ) : (
              <div className="min-h-[430px] p-4 sm:p-6">
                <div className="space-y-2">
                  {terminalShown.map((line, index) => (
                    <TerminalLine
                      key={`${line.prompt}-${line.text}`}
                      line={line}
                      active={index === terminalIndex}
                    />
                  ))}

                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
