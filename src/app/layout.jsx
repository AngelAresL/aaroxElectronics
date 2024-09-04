import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header.jsx';
import SideMenu from './components/SideMenu/SideMenu.jsx';
import Footer from './components/Footer/Footer.jsx';
import CookiesConsent from './components/CookiesConsent/CookiesConsent';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aarox Electronics',
  description: 'Aarox Electronics is an engineering company focused on developing custom electronics. Specialized in Power Electronics and Embedded Systems, including FW and SW.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:url" content="https://aaroxelectronics.es" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://i.imgur.com/wEZBXbk.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="aaroxelectronics.es" />
        <meta property="twitter:url" content="https://aaroxelectronics.es" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://i.imgur.com/wEZBXbk.png" />
      </head>
      <body className={inter.className}>
        <SideMenu/>
        <Header/>
        {children}
        <Footer/>
        <CookiesConsent/>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
