import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>PyLamp</title>
        <link rel="icon" href="/pylamp_logo.png" type="image/png" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body className="flex flex-col bg-white min-h-screen">
        <Navbar />
        <div className="grow">
          {children}
        </div>
        <Footer />
        <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
      </body>
    </html>
  );
}
