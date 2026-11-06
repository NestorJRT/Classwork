import type { Metadata } from 'next';
import './globals.css';
import { InitiativesProvider } from '../components/InitiativesContext';
import SiteLayout from '../components/SiteLayout';

export const metadata: Metadata = {
  title: 'SustainHub',
  description: 'Explore campus climate projects',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <InitiativesProvider>
          <SiteLayout>{children}</SiteLayout>
        </InitiativesProvider>
      </body>
    </html>
  );
}
