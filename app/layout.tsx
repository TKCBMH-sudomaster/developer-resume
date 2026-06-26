import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full-Stack Developer | Professional Portfolio",
  description: "High-performance technical interactive resume and portfolio application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      <body className="antialiased min-h-screen flex flex-col font-sans">
        {/* Persistent Professional Navigation Header */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-900">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-lg font-bold tracking-tight text-emerald-400 hover:text-emerald-300 transition-colors">
              Portfolio / Resume
            </Link>
            <div className="flex gap-6 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
              <Link href="/skills" className="hover:text-emerald-400 transition-colors">Skills</Link>
            </div>
          </nav>
        </header>

        {/* Global Main Content Area */}
        <main className="flex-grow max-w-5xl w-full mx-auto px-6 py-12">
          {children}
        </main>

        {/* Professional Footer */}
        <footer className="border-t border-slate-900/60 py-6 text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} — Built with Next.js and Tailwind CSS
        </footer>
      </body>
    </html>
  );
}