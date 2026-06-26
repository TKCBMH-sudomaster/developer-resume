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
    <html lang="en" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <body style={{ margin: 0, padding: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'ui-sans-serif, system-ui, sans-serif', backgroundColor: '#000000' }}>
        
        {/* Navigation Bar - Spaced Out with Valid TypeScript Styles */}
        <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(12, 13, 16, 0.9)', borderBottom: '1px solid #27272a', backdropFilter: 'blur(8px)' }}>
          <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.05em', color: '#ffffff' }}>
                ENGINEERING <span style={{ color: '#f97316' }}>PORTFOLIO</span>
              </span>
            </Link>
            
            {/* Perfectly Spaced-Out Professional Navigation Link Elements */}
            <div style={{ display: 'flex', gap: '40px', fontSize: '14px', fontWeight: 600 }}>
              <Link href="/" style={{ textDecoration: 'none', color: '#a1a1aa' }}>Home</Link>
              <Link href="/projects" style={{ textDecoration: 'none', color: '#a1a1aa' }}>Projects</Link>
              <Link href="/skills" style={{ textDecoration: 'none', color: '#a1a1aa' }}>Skills</Link>
            </div>
          </nav>
        </header>

        {/* Main Content Container */}
        <main style={{ flexGrow: 1, maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '48px 24px', boxSizing: 'border-box' }}>
          {children}
        </main>

        {/* Minimalist Corporate Footer */}
        <footer style={{ borderTop: '1px solid rgba(39, 39, 42, 0.6)', padding: '24px 0', textAlign: 'center', fontSize: '12px', color: '#52525b' }}>
          © {new Date().getFullYear()} Systems Optimization Portfolio • Built with Next.js & Deployed via Vercel
        </footer>
      </body>
    </html>
  );
}