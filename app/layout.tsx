import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Mengrounded | Straight-Talking Coaching for Men in Los Angeles",
  description:
    "Anger, regret, grief, relationships. If you're carrying something heavy, there's a way out. Practical, honest phone conversations with a guy who's been there. Based in Los Angeles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full`}
    >

      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <header className="bg-[var(--surface)] border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="" className="w-10 h-10" />
              <h1 className="hidden sm:block text-2xl font-semibold tracking-tight text-[var(--primary)]">Mengrounded</h1>
            </div>
            <nav className="flex items-center gap-1 text-sm">
              <a href="/" className="px-3 sm:px-4 py-2 rounded-md hover:bg-[var(--bg)] transition-colors">Home</a>
              <a href="/about" className="px-3 sm:px-4 py-2 rounded-md hover:bg-[var(--bg)] transition-colors">About</a>
              <a href="/contact" className="px-3 sm:px-4 py-2 rounded-md hover:bg-[var(--bg)] transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        <footer className="bg-[var(--primary)] text-[#d4c9b8] py-8 text-sm">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Mengrounded · Los Angeles. Practical guidance for real life.</p>
            <p className="text-[#a89b88]">Built with honesty and experience.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}