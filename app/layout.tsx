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
      <body className="flex h-screen w-screen bg-gray-800 text-white flex-col">
        <header>
          {/* <NavBar/> */}
        </header>
        {children}
      </body>
    </html>
  );
}
