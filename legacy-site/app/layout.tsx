import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Tech Studio - Digital Solutions That Scale',
  description: 'Creative studio solutions — web, apps, AI automations, interactive tools and more. Clear pricing, concise deliverables, and full documentation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

