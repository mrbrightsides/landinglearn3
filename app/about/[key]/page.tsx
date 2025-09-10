import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Cpu,
  Blocks,
  MessageSquare,
  Vote,
  FlaskConical,
  LineChart,
  Search,
  PanelRightOpen,
  ArrowRight,
  ExternalLink,
  BookOpenText,
} from "lucide-react";

// --- Simple shadcn/ui stand-ins (biar konsisten dengan landing sebelumnya) --- //
const Card = ({ className = "", children }: any) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 shadow-sm ${className}`}>
    {children}
  </div>
);
const CardHeader = ({ children, className = "" }: any) => (
  <div className={`p-5 border-b border-white/10 ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }: any) => (
  <div className={`p-5 ${className}`}>{children}</div>
);
const Button = ({
  href,
  children,
  className = "",
  variant = "default",
  target,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "ghost";
  target?: string;
}) => {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition hover:opacity-90";
  const styles = variant === "ghost" ? "bg-transparent border border-white/15" : "bg-white text-black";
  const Comp: any = href ? Link : "button";
  return (
    <Comp href={href} className={`${base} ${styles} ${className}`} target={target}>
      {children}
    </Comp>
  );
};

// --- Catalog modul (gunakan slug/key sebagai route param) --- //
type Modul = {
  key: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  summary: string;
  bullets: string[];
  // demoUrl sebaiknya diarahkan ke halaman streamlit yang sesuai,
  // atau ke landing Learn3 + anchor/param
  demoUrl?: string;
  docsUrl?: string;
};

const MODULS: Record<string, Modul> = {
  "ai-playground": {
    key: "ai-playground",
    title: "AI Playground",
    tagline: "Portal latihan terpusat untuk semua bot & simulasi",
    icon: <Cpu className="h-6 w-6" />,
    summary:
      "Ruang utama untuk mencoba seluruh fitur AI di Learn3: dari tanya jawab dasar blockchain, latihan simulasi, sampai eksplorasi riset dan AI Gateway.",
    bullets: [
      "Pilih mode: BlockBot, BlockChat, BlockTutor, DAO Voter, LP Simulator, Quiz, Research, AI Gateway.",
      "Cocok buat pemula yang ingin tur keliling fitur dengan cepat.",
      "Mendukung cache-bust (force refresh chat) bila dibutuhkan.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground",
    docsUrl: "/docs#ai-playground",
  },
  blockbot: {
    key: "blockbot",
    title: "BlockBot",
    tagline: "Tanya-jawab Web3 & Blockchain dasar",
    icon: <MessageSquare className="h-6 w-6" />,
    summary:
      "Bot tanya-jawab paling ramah pemula untuk konsep Web3 & blockchain. Cocok buat warm-up sebelum simulasi/coding.",
    bullets: [
      "Ramah pemula dengan bahasa sederhana.",
      "Fokus pada konsep dasar (block, tx, konsensus, wallet, network).",
      "Gunakan untuk klarifikasi istilah & analogi cepat.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground&mode=blockbot",
    docsUrl: "/docs#blockbot",
  },
  blocktutor: {
    key: "blocktutor",
    title: "BlockTutor",
    tagline: "Tutor interaktif konsep Web3 & Blockchain",
    icon: <Blocks className="h-6 w-6" />,
    summary:
      "Bot pengajar santai untuk memahami konsep-konsep kunci: wallet, konsensus, token, smart contract, sampai praktik mini.",
    bullets: [
      "Bahasa ringan, cocok untuk pemberian contoh & analogi.",
      "Tingkatkan pemahaman sebelum lanjut ke simulasi teknis.",
      "Direkomendasikan untuk sesi onboarding kelas.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground&mode=blocktutor",
    docsUrl: "/docs#blocktutor",
  },
  blockchat: {
    key: "blockchat",
    title: "BlockChat",
    tagline: "Ngobrol santai seputar blockchain & kripto",
    icon: <MessageSquare className="h-6 w-6" />,
    summary:
      "Mode obrolan bebas tentang perkembangan ekosistem, tren, istilah-istilah, hingga etika & keamanan on-chain.",
    bullets: [
      "Cocok buat diskusi harian & QnA cepat.",
      "Bawa topik sendiri atau pakai suggested prompts.",
      "Aman untuk pemula, menyertakan rambu-rambu risiko.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground&mode=blockchat",
    docsUrl: "/docs#blockchat",
  },
  "dao-voter": {
    key: "dao-voter",
    title: "DAO Voter Simulator",
    tagline: "Simulasi voting DAO, quorum, & proposal",
    icon: <Vote className="h-6 w-6" />,
    summary:
      "Latihan memahami mekanisme tata kelola DAO: membuat proposal, memilih opsi voting, menghitung quorum, dan menganalisis hasil.",
    bullets: [
      "Belajar parameter voting (quorum, threshold, weighting).",
      "Studi kasus sederhana sampai skenario multi-parameter.",
      "Cocok untuk materi governance & organisasi on-chain.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground&mode=dao",
    docsUrl: "/docs#dao-voter",
  },
  "lp-simulator": {
    key: "lp-simulator",
    title: "LP Simulator",
    tagline: "Latihan Liquidity Pool (AMM), fee, impermanent loss",
    icon: <FlaskConical className="h-6 w-6" />,
    summary:
      "Simulasi AMM (Uniswap-like): deposit, swap, fee, hingga impermanent loss. Latihan yang pas untuk memahami DeFi dari dasarnya.",
    bullets: [
      "Eksperimen dengan harga & komposisi aset.",
      "Hitung IL (Impermanent Loss) & fee yield sederhana.",
      "Fundamental untuk materi DeFi & DEX.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground&mode=lp",
    docsUrl: "/docs#lp-simulator",
  },
  quiz: {
    key: "quiz",
    title: "Quiz",
    tagline: "Kuis konsep Web3 tersetruktur",
    icon: <LineChart className="h-6 w-6" />,
    summary:
      "Kuis bertingkat untuk mengukur pemahaman topik-topik penting. Bisa dipakai sebagai pre-test atau post-test di kelas.",
    bullets: [
      "Pertanyaan bertingkat: basic → intermediate → advanced.",
      "Bisa dipakai untuk asesmen internal kelas.",
      "Ada pembahasan singkat di akhir sesi.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground&mode=quiz",
    docsUrl: "/docs#quiz",
  },
  research: {
    key: "research",
    title: "Research",
    tagline: "Eksplorasi pustaka & eksperimen prompt",
    icon: <Search className="h-6 w-6" />,
    summary:
      "Mode eksplorasi bebas dengan sumber bacaan terkurasi. Cocok untuk tugas riset ringan, paper reading, atau studi topik tertentu.",
    bullets: [
      "Kumpulkan ide & referensi dengan cepat.",
      "Konsisten dengan batasan etika & sumber terpercaya.",
      "Bisa jadi jembatan menuju AI Gateway.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground&mode=research",
    docsUrl: "/docs#research",
  },
  "ai-gateway": {
    key: "ai-gateway",
    title: "AI Gateway",
    tagline: "Jembatan ke multi-model untuk eksperimen lanjut",
    icon: <PanelRightOpen className="h-6 w-6" />,
    summary:
      "Gerbang ke berbagai model (via Vercel AI SDK, dll) untuk eksperimen lanjutan. Cocok untuk praktikum, benchmarking, atau demo arsitektur.",
    bullets: [
      "Berbasis Vercel/AI SDK (siap diintegrasikan).",
      "Cocok untuk sandbox developer & advanced users.",
      "Pakai secara bertanggung jawab, perhatikan biaya & kuota.",
    ],
    demoUrl: "https://learn3.streamlit.app?tab=playground&mode=gateway",
    docsUrl: "/docs#ai-gateway",
  },
};

// --- Metadata dinamis untuk SEO --- //
export async function generateMetadata({ params }: { params: { key: string } }) {
  const mod = MODULS[params.key];
  if (!mod) return { title: "Modul Learn3", description: "Detail modul Learn3." };
  return {
    title: `${mod.title} — Learn3`,
    description: mod.summary,
  };
}

// --- Helper: list available slug --- //
function AvailableKeys() {
  return (
    <ul className="mt-3 list-disc pl-5 text-white/70">
      {Object.values(MODULS).map((m) => (
        <li key={m.key}>
          <Link href={`/${m.key}`} className="underline underline-offset-4">
            {m.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// --- Halaman detail per-modul --- //
export default function ModulDetailPage({ params }: { params: { key: string } }) {
  const mod = MODULS[params.key];
  if (!mod) {
    // Tampilkan fallback 404-style, tapi ramah
    return (
      <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
        <section className="mx-auto w-full max-w-4xl px-6 py-14">
          <h1 className="text-3xl font-bold">Modul tidak ditemukan</h1>
          <p className="mt-2 text-white/70">
            Kunci <code className="rounded bg-white/10 px-1 py-0.5">{params.key}</code> belum terdaftar. Coba pilih salah
            satu modul yang tersedia:
          </p>
          <AvailableKeys />
          <div className="mt-6">
            <Button href="/" variant="ghost">
              Kembali ke Landing <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <Cpu className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Learn3</span>
        </Link>
        <div className="flex items-center gap-3">
          <Button href="/" variant="ghost" className="relative gradient-border">
            Home
          </Button>
        </div>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 pb-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          {mod.icon}
          <span>{mod.tagline}</span>
        </div>

        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{mod.title}</h1>
        <p className="mt-3 max-w-3xl text-white/70">{mod.summary}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {mod.demoUrl && (
            <Button 
              href="https://learn3.streamlit.app/" 
              target="_blank"
            >
              Buka Demo <ExternalLink className="h-4 w-4" />
            </Button>
          )}

          {mod.docsUrl && (
            <Button href={mod.docsUrl} variant="ghost" className="relative gradient-border">
              Baca Docs <BookOpenText className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Apa yang kamu dapat</h3>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-white/80">
                {mod.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Catatan Integrasi</h3>
            </CardHeader>
            <CardContent className="text-white/80">
              <p>
                Beberapa penyedia (mis. Streamlit) menonaktifkan <em>iframe embedding</em> lewat header{" "}
                <code>X-Frame-Options</code>/<code>CSP</code>. Karena itu tombol <strong>Buka Demo</strong> akan
                diarahkan ke tab baru. Jika kamu butuh embed penuh, jalankan mirror sendiri atau aktifkan proxy/host
                yang mengizinkan embed.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <p className="text-sm text-white/60">
            Butuh modul lain? Lihat juga:{" "}
            <span className="text-white">
              {Object.values(MODULS)
                .filter((m) => m.key !== mod.key)
                .slice(0, 6)
                .map((m, i, arr) => (
                  <span key={m.key}>
                    <Link href={`/${m.key}`} className="underline underline-offset-4">
                      {m.title}
                    </Link>
                    {i < arr.length - 1 ? ", " : ""}
                  </span>
                ))}
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
