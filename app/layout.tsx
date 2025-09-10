import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn3 — Chat. Code. Chained. Certified.",
  description: "Belajar Web3 santai tapi serius hasilnya: bot, quiz, simulasi DeFi & DAO, smart contract, dan sertifikasi on-chain.",
openGraph: {
    title: "Learn3 — Web3 Learning Hub",
    description: "Chatbot + Simulators + Workshop + Certification",
    images: ["/og-learn3.png"],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
