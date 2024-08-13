import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Med Laamyry Portfolio',
  description: 'A professional portfolio website for Med Laamyry',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className=" container mx-auto ">
          {children}
        </main>
      </body>
    </html>
  );
}
