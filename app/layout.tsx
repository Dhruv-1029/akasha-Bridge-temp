import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Easy Money Bridge - Cross-Chain Asset Transfer',
  description:
    'Seamlessly transfer your assets across multiple blockchain networks with the power of Akasha. Fast, secure, and reliable cross-chain transfers.',
  keywords: 'blockchain, bridge, cross-chain, transfer, crypto, defi, akasha',
  authors: [{ name: 'Easy Money Bridge' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Easy Money Bridge - Cross-Chain Asset Transfer',
    description:
      'Seamlessly transfer your assets across multiple blockchain networks',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Money Bridge - Cross-Chain Asset Transfer',
    description:
      'Seamlessly transfer your assets across multiple blockchain networks',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#667eea',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            #__next-build-indicator,
            [data-nextjs-build-indicator],
            .nextjs-build-indicator,
            [class*="nextjs"],
            [class*="NextJS"],
            [class*="build-indicator"],
            [class*="buildIndicator"] {
              display: none !important;
            }
          `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
