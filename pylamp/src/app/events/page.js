import ResponsiveGrid from "../components/Responsivegrid";
import React from "react";

export default function Home() {
  const events = [
    { id: 1, name: "Event Name 1", imgSrc: "/upcoming/poster1.png" },
    { id: 2, name: "Event Name 2", imgSrc: "/upcoming/poster1.png" },
    { id: 3, name: "Event Name 3", imgSrc: "/upcoming/poster1.png" },
    { id: 4, name: "Event Name 4", imgSrc: "/upcoming/poster1.png" },
    { id: 5, name: "Event Name 5", imgSrc: "/upcoming/poster1.png" },
    { id: 6, name: "Event Name 6", imgSrc: "/upcoming/poster1.png" },
    { id: 7, name: "Event Name 7", imgSrc: "/upcoming/poster1.png" },
    { id: 8, name: "Event Name 8", imgSrc: "/upcoming/poster1.png" },
  ];
  return (
    <div>
      <h1 className="md:text-6xl sm:text-3xl text-lg font-bold text-center mb-6">
          Events of 2024-25
        </h1>
      <ResponsiveGrid events={events} />
    </div>
  );
}