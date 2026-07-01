import type React from 'react';
import LayoutProvider from '@theme/Layout/Provider';
import Footer from '@site/src/components/Footer';
import Navbar from '@site/src/components/Navbar';

type SiteLayoutProps = {
  children: React.ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <LayoutProvider>
      <div className='min-h-screen flex flex-col bg-base-100 text-base-content'>
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </LayoutProvider>
  );
}
