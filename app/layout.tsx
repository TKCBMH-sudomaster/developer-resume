import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "PORTFOLIO // [systems-opt:eng] // DEV-RESUME_0.1.0",
  description: "Systems Optimization & Full-Stack Engineer Interactive Resume.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white selection:bg-orange-500/30 selection:text-orange-300">
      <body className="antialiased min-h-screen flex flex-col font-sans">
        {/* Persistent Navigation Header // High-Tech Tactical Redesign */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
          <nav className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-xl font-black tracking-tight text-white hover:text-emerald-400 transition-colors">
                PORTFOLIO <span className="text-emerald-400">/</span> SYSTEMS ENG<span className="text-emerald-300">_</span>
              </span>
            </Link>
            <div className="flex gap-1.5 text-xs font-semibold tracking-wider text-slate-400 font-mono uppercase">
              <Link href="/" className="px-3 py-1.5 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-all border border-transparent hover:border-slate-800">01 Home</Link>
              <Link href="/projects" className="px-3 py-1.5 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-all border border-transparent hover:border-slate-800">02 Projects</Link>
              <Link href="/skills" className="px-3 py-1.5 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-all border border-transparent hover:border-slate-800">03 Skills</Link>
            </div>
          </nav>
        </header>

        {/* Global Main Content Area (Max Width Increased) */}
        <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
          {children}
        </main>

        {/* Professional Footer */}
        <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500 font-medium tracking-wide">
          © {new Date().getFullYear()} — Systems Engineering Terminal v0.1.0 // [deploy-engine:vercel]
        </footer>
      </body>
    </html>
  );
}