import './globals.css'; 
import Link from 'next/link';

export const metadata = {
  title: 'Trevor Hunter | Portfolio',
  description: 'Enterprise Systems & Software Engineering',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" }
  ];

  return (
    <html lang="en">
      <head>
        {/* Injecting pure CSS rules to handle the hover states safely on the server side */}
        <style>{`
          .nav-item {
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            color: #a1a1aa;
            background-color: transparent;
            cursor: pointer;
            transition: all 0.15s ease;
          }
          .nav-item:hover {
            background-color: #09090b !important;
            color: #ffffff !important;
          }
        `}</style>
      </head>
      <body style={{ backgroundColor: '#000000', color: '#ffffff', margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        
        {/* Main Interface Wrapper Layout */}
        <div style={{ display: 'flex', minHeight: '100vh', maxWidth: '1200px', margin: '0 auto', padding: '24px', gap: '40px' }}>
          
          {/* Persistent Sidebar Navigation */}
          <aside style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '24px', flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.02em' }}>TREVOR HUNTER</div>
              <div style={{ fontSize: '12px', color: '#71717a', fontWeight: 600 }}>IT Engineer</div>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none' }}>
                  <div className="nav-item">
                    {link.name}
                  </div>
                </Link>
              ))}
            </nav>
          </aside>

          {/* Dynamic Content Frame Window */}
          <main style={{ flexGrow: 1, minWidth: 0 }}>
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}