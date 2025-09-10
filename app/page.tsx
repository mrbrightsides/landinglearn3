"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CircuitBoard,
  MessageSquare,
  GraduationCap,
  Vote,
  LineChart,
  HelpCircle,
  Search,
  Sparkles,
  FlaskConical,
  Hammer,
  Gauge,
  ShieldCheck,
  Beaker,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

// --- mini-UI --- //
const Card = ({ className = "", children }: any) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }: any) => (
  <div className={`p-5 border-b border-white/10 ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }: any) => (
  <div className={`p-5 ${className}`}>{children}</div>
);
const Button = ({ href, children, className = "", variant = "default" }: any) => {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition hover:opacity-90";
  const styles = variant === "ghost" ? "bg-transparent border border-white/15" : "bg-white text-black";
  const Comp: any = href ? Link : "button";
  return (
    <Comp href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Comp>
  );
};

// --- animations --- //
const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as any,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as any },
  },
};

// --- data --- //
const CHANNELS = [
  { icon: <FlaskConical className="h-4 w-4" />, name: "Blockchain 101" },
  { icon: <Beaker className="h-4 w-4" />, name: "Token Lab" },
  { icon: <Vote className="h-4 w-4" />, name: "DAO Sandbox" },
  { icon: <LineChart className="h-4 w-4" />, name: "DeFi Workshop" },
  { icon: <Hammer className="h-4 w-4" />, name: "Smart Contract Studio" },
  { icon: <Gauge className="h-4 w-4" />, name: "Gas & Performance" },
  { icon: <ShieldCheck className="h-4 w-4" />, name: "Audit Security" },
  { icon: <FlaskConical className="h-4 w-4" />, name: "Web3 Lab" },
  { icon: <Award className="h-4 w-4" />, name: "Certification" },
];

const BOTS = [
  {
    key: "blockbot",
    name: "BlockBot",
    tagline: "Tanya-jawab Web3 & blockchain dasar",
    icon: <CircuitBoard className="h-5 w-5" />,
    href: "https://my.artibot.ai/learn3bot",
    bullets: ["Ramah pemula", "Contoh nyata & analogi"],
  },
  {
    key: "blockchat",
    name: "BlockChat",
    tagline: "Diskusi teknis: protokol, L2, konsensus",
    icon: <MessageSquare className="h-5 w-5" />,
    href: "https://bot.writesonic.com/share/bot/a148b878-259e-4591-858a-8869b9b23604",
    bullets: ["Arsitektur jaringan", "Ekosistem & tooling"],
  },
  {
    key: "blocktutor",
    name: "BlockTutor",
    tagline: "Tutor belajar Web3 (bertahap)",
    icon: <GraduationCap className="h-5 w-5" />,
    href: "https://www.chatbase.co/chatbot-iframe/RIURX1Atx537tDeYNcw8R",
    bullets: ["Roadmap, modul, quiz", "Progressive learning"],
  },
  {
    key: "dao-sim",
    name: "DAO Voter Simulator",
    tagline: "Simulasi voting & proposal DAO",
    icon: <Vote className="h-5 w-5" />,
    href: "https://tawk.to/chat/68ba6085721af15d8752fbc5/1j4c0i358",
    bullets: ["Rancang proposal", "Cobain quorum & strategi"],
  },
  {
    key: "lp-sim",
    name: "LP Simulator",
    tagline: "Simulasi AMM/LP, IL, fee & skenario",
    icon: <LineChart className="h-5 w-5" />,
    href: "https://denser.ai/u/embed/chatbot_o90yjz0cba1ymfmzi2nwr",
    bullets: ["Pool param & grafik", "What-if scenario"],
  },
  {
    key: "quiz",
    name: "Quiz",
    tagline: "Kuis interaktif + skor",
    icon: <HelpCircle className="h-5 w-5" />,
    href: "https://wayground.com/embed/quiz/68bb727d3fa528df7533c75e",
    bullets: ["Multi-level quiz", "Badge/XP opsional"],
  },
  {
    key: "research",
    name: "Research",
    tagline: "Eksplorasi paper/standard & analitik",
    icon: <Search className="h-5 w-5" />,
    href: "https://zenoembed.textcortex.com/?embed_id=emb_01k4cfh76fehtte5jgmy3atz69",
    bullets: ["Gali EIP/ERC/BEP", "Ringkasan & insight"],
  },
  {
    key: "gateway",
    name: "AI Gateway",
    tagline: "Multi-model playground untuk eksperimen",
    icon: <Sparkles className="h-5 w-5" />,
    href: "https://learn3ai.vercel.app/",
    bullets: ["Ganti model cepat", "Prompt utils & tools"],
  },
];

export default function Learn3Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Learn3</span>
        </Link>
        <div className="flex items-center gap-3">
          <Button href="https://learn3.streamlit.app/" variant="ghost" className="relative gradient-border">Learn3 App</Button>
          <Button href="https://github.com/mrbrightsides/learn3">GitHub</Button>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 pb-12 pt-10 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* background halus */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-noise" />

        {/* badges atas */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10
                          bg-gradient-to-r from-fuchsia-600/60 via-indigo-600/60 to-sky-600/60
                          px-3 py-1 text-xs font-medium text-white shadow-glow">
            <ShieldCheck className="h-4 w-4" /> Certified On-Chain
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10
                          bg-gradient-to-r from-sky-600/60 via-indigo-600/60 to-fuchsia-600/60
                          px-3 py-1 text-xs font-medium text-white/95">
            <FlaskConical className="h-4 w-4" /> Web3 Lab
          </span>
        </motion.div>

        {/* heading */}
        <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight md:text-6xl">
          Chat. Code. <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">Chained.</span> Certified.
          <br />Your Web3 Journey Starts Here
        </motion.h1>

        {/* subheading */}
        <motion.p variants={item} className="max-w-3xl text-white/70">
          Belajar Web3 gak harus kaku. Di Learn3 kamu bisa ngobrol sama bot, main quiz,
          latihan simulasi DeFi & DAO, sampai bikin smart contract sendiri. Santai
          ngobrolnya, serius hasilnya — reward-nya on-chain 🚀
        </motion.p>

        {/* pills/channel */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-2">
          {CHANNELS.map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5
                        px-3 py-1 text-xs text-white/80 backdrop-blur transition
                        hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              {c.icon}
              {c.name}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
          <Button href="#bots" onClick={(e:any)=>{ e.preventDefault(); document.querySelector("#bots")?.scrollIntoView({behavior:"smooth"}); }}>
            Mulai Jelajah <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/docs" variant="ghost" className="relative gradient-border">Dokumentasi</Button>
        </motion.div>
      </motion.section>

      {/* Bots grid */}
      <motion.section
        id="bots"
        className="mx-auto w-full max-w-6xl px-6 pb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOTS.map((b) => (
            <motion.div
              key={b.key}
              variants={item}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <Card className="group hover:shadow-lg hover:shadow-black/20 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-2 text-white">{b.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{b.name}</h3>
                      <p className="text-sm text-white/70">{b.tagline}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-white/80">
                    {b.bullets.map((x, i) => (
                      <li key={i}>{x}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <Button href={b.href}>Coba {b.name} <ArrowRight className="h-4 w-4" /></Button>
                    <Link
                      href={`/about/${b.key}`}
                      className="text-sm text-white/70 underline underline-offset-4"
                    >
                      Detail
                    </Link>

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Feature strip */}
      <motion.section
        className="mx-auto w-full max-w-6xl px-6 pb-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card>
          <CardContent className="grid gap-6 p-6 md:grid-cols-3">
            <motion.div variants={item}>
              <h4 className="mb-1 font-semibold">Tutor + Bot + Sim</h4>
              <p className="text-sm text-white/70">
                Belajar terstruktur (BlockTutor), diskusi bebas (BlockChat), dan simulasi (LP/DAO) dalam satu tempat.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <h4 className="mb-1 font-semibold">AI Gateway</h4>
              <p className="text-sm text-white/70">
                Playground multi-model untuk eksplorasi riset, generate kode, dan uji ide cepat.
              </p>
            </motion.div>
            <motion.div variants={item}>
              <h4 className="mb-1 font-semibold">On-chain Ready</h4>
              <p className="text-sm text-white/70">
                Dari konsep ke praktik: kontrak, gas, audit, sampai sertifikasi—step by step.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-center text-sm text-white/60">
        <p className="mb-1">Learn3 — Chatbot + Simulators + Workshop Web3.</p>
        <p>
          Code & issues di{" "}
          <Link href="https://github.com/mrbrightsides" className="underline underline-offset-4">
            GitHub
          </Link>. Keep building, stay curious ✨
        </p>
      </footer>
    </main>
  );
}
