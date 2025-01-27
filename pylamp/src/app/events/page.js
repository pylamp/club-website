import ResponsiveGrid from "../components/Responsivegrid";
import React from "react";

export default function Home() {
  const events = [
    {
      id: 1,
      name: "Curiosity corner",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
    {
      id: 2,
      name: "Curiosity corner 2",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
    {
      id: 3,
      name: "Curiosity corner 3",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
    {
      id: 4,
      name: "Curiosity corner 4",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
    {
      id: 5,
      name: "Curiosity corner 5",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
    {
      id: 6,
      name: "Curiosity corner 6",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
    {
      id: 7,
      name: "Curiosity corner 7",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
    {
      id: 8,
      name: "Curiosity corner 8",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
  ];
  return (
    <div>
      <h1 className="md:text-5xl sm:text-3xl text-lg font-bold text-center mb-6">
          Events of 2024-25
        </h1>
      <ResponsiveGrid events={events} />
    </div>
  );
}