import "./globals.css";

export const metadata = {
  title: "Med Laamyry Portfolio",
  description: "A professional portfolio website for Med Laamyry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className=" mx-auto ">{children}</main>
      </body>
    </html>
  );
}
