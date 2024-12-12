import "./globals.css";
import Navbar from "./components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col w-screen">
        <Navbar />
        {children}
        <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
      </body>
    </html>
  );
}
