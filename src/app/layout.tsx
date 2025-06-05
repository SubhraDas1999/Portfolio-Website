import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/context/ThemeProvider';

// Define fonts using next/font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Subhra Das - Product Manager',
  description: 'Portfolio of Subhra Das, a Product Manager with 4+ years of experience in B2C and B2B fintech and SME tech.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Fonts links are handled by next/font, no need for <link> tags here for Inter and Poppins */}
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          defaultTheme="dark"
          storageKey="ui-theme"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
