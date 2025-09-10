"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, FlaskConical, BookOpen, Anchor, Menu } from "lucide-react";
import { motion, container, fadeUp, fadeIn, makeContainer } from "@/components/motion";
import Heading from "@/components/ui/Heading";
import { useScrollSpy } from "@/components/useScrollSpy";

const ids = ["blockbot","blockchat","blocktutor","dao-sim","lp-sim","quiz","research","gateway"];

const SECTIONS = [
  { id: "blockbot",    title: "BlockBot" },
  { id: "blockchat",   title: "BlockChat" },
  { id: "blocktutor",  title: "BlockTutor" },
  { id: "dao-sim",     title: "DAO Voter Simulator" },
  { id: "lp-sim",      title: "LP Simulator" },
  { id: "quiz",        title: "Quiz" },
  { id: "research",    title: "Research" },
  { id: "gateway",     title: "AI Gateway" },
];

export default function DocsPage() {
  const activeId = useScrollSpy(ids, 120);
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* top bar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
          <Link
            href="/#bots"
            onClick={(e) => {
              // smooth scroll kalau masih di halaman yang sama
              if (location.pathname === "/") {
                e.preventDefault();
                document.querySelector("#bots")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>

          <span className="hidden items-center gap-2 text-xs text-white/60 sm:inline-flex">
            <BookOpen className="h-4 w-4" />
            Dokumentasi Learn3
          </span>

          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
          >
            Home
          </Link>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-10">
        <motion.div variants={makeContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.div variants={fadeIn(0.05)} className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-600/60 via-indigo-600/60 to-sky-600/60 px-3 py-1 text-xs font-medium text-white">
              <ShieldCheck className="h-4 w-4" /> Certified On-Chain
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10
                          bg-gradient-to-r from-sky-600/60 via-indigo-600/60 to-fuchsia-600/60
                          px-3 py-1 text-xs font-medium text-white/95">
            <FlaskConical className="h-4 w-4" /> Web3 Lab
          </span>
          </motion.div>

          <motion.h1 variants={fadeUp(0.1)} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Dokumentasi <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">Learn3</span>
          </motion.h1>

          <motion.p variants={fadeUp(0.2)} className="mt-3 text-white/70 max-w-none">
            Halaman ini menjelaskan cara kerja Learn3: daftar bot/simulator, alur belajar yang direkomendasikan,
            dan tautan integrasi.
          </motion.p>
        </motion.div>
      </section>

      {/* content + toc */}
      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[220px,1fr]">
        {/* TOC */}
        <aside className="md:sticky md:top-20">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/90">
              <Menu className="h-4 w-4" /> Daftar Isi
            </div>
            <nav className="space-y-1">
              {ids.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition
                    ${activeId === id ? "bg-white/10 text-white font-medium" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                >
                  <Anchor className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                  {id.replace("-", " ")}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* main docs */}
        <div className="space-y-8">
          {/* Ringkasan */}
          <motion.div variants={makeContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp(0.1)} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Ringkasan</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                <li>Playground AI untuk belajar Web3/Blockchain.</li>
                <li>Mode belajar: Tanya-jawab (Bot), Tutor terstruktur, Simulasi (LP/DAO), Quiz, Research, dan AI Gateway.</li>
                <li>Channel pendukung: Blockchain 101, Token Lab, DAO Sandbox, DeFi Workshop, Smart Contract Studio, Gas & Performance, Audit Security, Web3 Lab, Certification.</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Sections (auto-varianted) */}
          {[
            {
              id: "blockbot",
              title: "BlockBot",
              body: (
                <>
                  <p className="text-white/70">
                    Bot tanya-jawab paling ramah pemula untuk konsep Web3 & blockchain.
                    Cocok untuk warm-up sebelum masuk ke simulasi atau coding.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                    <li>Fokus: konsep dasar (block, tx, konsensus, wallet, network).</li>
                    <li>Gunakan untuk klarifikasi istilah & analogi sederhana.</li>
                  </ul>
                </>
              ),
            },
            {
              id: "blockchat",
              title: "BlockChat",
              body: (
                <>
                  <p className="text-white/70">
                    Diskusi teknis seputar arsitektur & protokol (L1/L2, rollup, bridging, modular chain, tooling).
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                    <li>Fokus: insight & best-practice ekosistem.</li>
                  </ul>
                </>
              ),
            },
            {
              id: "blocktutor",
              title: "BlockTutor",
              body: (
                <>
                  <p className="text-white/70">
                    Tutor berjenjang: roadmap, modul, dan latihan.
                    Direkomendasikan untuk jalur belajar terstruktur (101 → Workshop → Project).
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                    <li>Fokus: urutan materi, quiz, & rekomendasi project kecil.</li>
                  </ul>
                </>
              ),
            },
            {
              id: "dao-sim",
              title: "DAO Voter Simulator",
              body: (
                <>
                  <p className="text-white/70">
                    Simulasi governance: buat proposal, atur quorum/threshold, dan uji strategi voting.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                    <li>Skenario: quorum terlalu kecil/besar, delegasi, waktu voting.</li>
                    <li>Output: ringkasan hasil & pembelajaran praktis.</li>
                  </ul>
                </>
              ),
            },
            {
              id: "lp-sim",
              title: "LP Simulator",
              body: (
                <>
                  <p className="text-white/70">
                    Simulasi AMM/liquidity provider: IL, fee, volume, dan parameter pool.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-white/70">
                    <li>Bandingkan skenario & strategi; baca grafik hasil.</li>
                  </ul>
                </>
              ),
            },
            {
              id: "quiz",
              title: "Quiz",
              body: (
                <p className="text-white/70">
                  Kuis interaktif untuk evaluasi materi. Bisa multi-level dengan skor/badge.
                </p>
              ),
            },
            {
              id: "research",
              title: "Research",
              body: (
                <p className="text-white/70">
                  Mode eksplorasi standar/paper: EIP/ERC, framework, sampai analitik sederhana.
                </p>
              ),
            },
            {
              id: "gateway",
              title: "AI Gateway",
              body: (
                <p className="text-white/70">
                  Playground multi-model (mis. Vercel AI Gateway) untuk eksperimen cepat:
                  generate kode, audit ringan, atau riset prompt.
                </p>
              ),
            },
          ].map((sec, idx) => (
            <motion.section
              key={sec.id}
              id={sec.id}
              variants={makeContainer()}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="scroll-mt-24"
            >
              <motion.div variants={fadeUp(0.08 + idx * 0.02)} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Heading id={sec.title} level={3}>{sec.title}</Heading>
                <div className="mt-2">{sec.body}</div>
              </motion.div>
            </motion.section>
          ))}

          {/* Alur Belajar */}
          <motion.div variants={makeContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp(0.1)} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Alur Belajar yang Direkomendasikan</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-white/70">
                <li>Mulai di <strong>BlockTutor</strong> (roadmap & modul).</li>
                <li>Perdalam di <strong>BlockBot</strong> / <strong>BlockChat</strong> (tanya-jawab & diskusi).</li>
                <li>Latihan di <strong>LP Simulator</strong> / <strong>DAO Voter Simulator</strong>.</li>
                <li>Cek pemahaman via <strong>Quiz</strong>.</li>
                <li>Eksplorasi lanjut di <strong>Research</strong> & eksperimen di <strong>AI Gateway</strong>.</li>
                <li>Masuk workshop: <em>Smart Contract Studio</em> → <em>Audit Security</em> → <em>Certification</em>.</li>
              </ol>
            </motion.div>
          </motion.div>

          {/* Tautan Integrasi */}
          <motion.div variants={makeContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUp(0.1)} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Alur Modul Pembelajaran yang Direkomendasikan</h2>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-white/70">
                <li><strong>AI Playground</strong> menjadi gerbang masuk, di mana peserta dapat berinteraksi dengan chatbot edukatif untuk memahami konsep dasar blockchain, smart contract, dan Web3. Modul ini menekankan pembelajaran berbasis percakapan dan eksplorasi ide.</li>
                <li><strong>Blockchain 101</strong> memberikan fondasi teoretis yang terstruktur, mencakup konsep ledger terdistribusi, mekanisme konsensus, hingga dasar tokenisasi.</li>
                <li><strong>Token Lab</strong> membawa peserta ke tahap praktik dengan membangun dan menguji token sederhana di testnet. Modul ini menekankan pemahaman ERC-20/721 dan keterampilan teknis deploy kontrak.</li>
                <li><strong>DAO Sandbox</strong> memperkenalkan peserta pada tata kelola terdesentralisasi. Di sini, peserta belajar tentang voting, proposal, dan mekanisme partisipasi komunitas.</li>
                <li><strong>DeFi Workshop</strong> membuka wawasan tentang layanan keuangan terdesentralisasi, mulai dari liquidity pool hingga yield farming, dalam format simulasi yang terkontrol.</li>
                <li><strong>Smart Contract Studio</strong> menjadi ruang praktik lanjutan, di mana peserta dapat menulis, mengedit, dan menguji smart contract mereka sendiri dengan dukungan dokumentasi dan template.</li>
                <li><strong>Gas & Performance</strong> mengajarkan peserta untuk memahami efisiensi transaksi, biaya gas, serta isu skalabilitas. Modul ini menghubungkan aspek teknis dengan evaluasi performa sistem blockchain.</li>
                <li><strong>Audit Security</strong> fokus pada keamanan kontrak pintar. Peserta diperkenalkan pada alat deteksi kelemahan (misalnya Mythril/Slither) dan praktik terbaik untuk mitigasi risiko.</li>
                <li><strong>Web3 Lab</strong> menyediakan ruang eksperimen integrasi, seperti koneksi wallet, pemanggilan API, dan pembuatan antarmuka dApp sederhana.</li>
                <li><strong>Certification</strong> menjadi puncak perjalanan. Peserta yang berhasil menyelesaikan modul-modul kunci memperoleh sertifikasi berbasis Soulbound Token (SBT) melalui portal RANTAI (rantai.elpeef.com). Sertifikasi ini bersifat on-chain, permanen, dan dapat diverifikasi sebagai bukti pencapaian akademik maupun profesional.</li>
              </ol>
            </motion.div>
          </motion.div>

          {/* Back to top */}
          <div className="flex justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
            >
              Kembali ke Atas
            </button>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-5xl px-6 pb-12 text-center text-sm text-white/60">
        Learn3 — dokumentasi singkat. Saran/perbaikan? PR welcome ✨
      </footer>
    </main>
  );
}

