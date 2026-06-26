import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Systems Optimization & Full-Stack Engineer",
  description: "Professional Technology Portfolio and Interactive Resume Application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-white selection:bg-orange-500/30 selection:text-orange-300">
      <body className="antialiased min-h-screen flex flex-col font-sans">
        {/* Clean Corporate-Tech Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-lg font-extrabold tracking-wider text-white uppercase hover:text-emerald-400 transition-colors">
                ENGINEERING <span className="text-emerald-400">PORTFOLIO</span>
              </span>
            </Link>
            <div className="flex gap-8 text-sm font-semibold tracking-wide text-slate-400">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
              <Link href="/skills" className="hover:text-emerald-400 transition-colors">Skills</Link>
            </div>
          </nav>
        </header>

        {/* Core Main Content Frame */}
        <main className="flex-grow max-w-7xl w-full mx-auto px-6 py-12">
          {children}
        </main>

        {/* Highly Professional Minimalist Footer */}
        <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500 font-medium tracking-wide">
          © {new Date().getFullYear()} Systems Optimization Portfolio • Built with Next.js & Deployed via Vercel
        </footer>
      </body>
    </html>
  );
}