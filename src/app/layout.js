import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import ClientSideProviderTest from '../components/clientSideProviderTest.jsx'
import Footer from '@/components/footer/Footer';
const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: {
    default:"Next App Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {/*<ClientSideProviderTest>*/}
          <div className='container'>
            <Navbar/>
            
            {children}
            <Footer/>
          </div>
        {/*</ClientSideProviderTest>*/}
        
      </body>
    </html>
  );
}
