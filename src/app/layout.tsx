import './globals.css';
import AppProvider from '@/providers/AppProvider';
import Header from '@/components/header/Header';
import FloatingImage from '@/components/transition/FloatingImage';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <AppProvider>
          <div className='container mx-auto'>
            <Header />
            <FloatingImage />
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
