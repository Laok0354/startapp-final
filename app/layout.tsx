import "./globals.css";
import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="w-screen h-screen">
      <head>
        <title>StartApp</title>
      </head>
      <body className="flex h-screen w-screen bg-gradient-to-br from-primaryv to-80% to-black text-white flex-col">
        <header>

        </header>
        {children}
      </body>
    </html>
  );
}
