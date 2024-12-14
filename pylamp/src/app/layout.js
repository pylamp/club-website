import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body className="flex flex-col bg-white">
        <Navbar />
        {children}
        <Footer />
        <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
      </body>
    </html>
  );
}
