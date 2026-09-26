import { getAssetPath } from '@/lib/asset-path';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientInit from '../components/ClientInit';

const baseIconPath = getAssetPath('/images/vision-visa-logo-symbol.webp');

export const metadata = {
  title: 'Vision Visa | Trusted Visa Consultants for International Travel',
  description: 'Apply for tourist, business, study, and work visas with Vision Visa. Get expert visa guidance, document verification, travel insurance, forex, and air ticket assistance.',
  keywords: 'Visa Consultant, Tourist Visa, Business Visa, Study Visa, Work Visa, Travel Insurance, Forex Services, Air Tickets, Visa Assistance, Visa Processing, International Travel',
  metadataBase: new URL('https://www.visionvisa.in'),
  alternates: {
    canonical: 'https://www.visionvisa.in/',
  },
  icons: {
    icon: baseIconPath,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={`${getAssetPath('/css/reset.css')}?v=20260926_v12`} />
        <link rel="stylesheet" href={`${getAssetPath('/css/main.css')}?v=20260926_v12`} />
        <link rel="stylesheet" href={`${getAssetPath('/css/components.css')}?v=20260926_v21`} />
        <link rel="stylesheet" href={`${getAssetPath('/css/animations.css')}?v=20260926_v12`} />
        <link rel="stylesheet" href={`${getAssetPath('/css/editorial-hero.css')}?v=20260926_v12`} />
        <Script src="https://unpkg.com/lucide@latest" strategy="beforeInteractive" />
        <Script src={getAssetPath('/js/countries-data.js')} strategy="beforeInteractive" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ClientInit />

        <Script src={getAssetPath('/js/search-engine.js')} strategy="afterInteractive" />
        <Script src={getAssetPath('/js/main.js')} strategy="afterInteractive" />
        <Script src={getAssetPath('/js/country-render.js')} strategy="afterInteractive" />
      </body>
    </html>
  );
}
