import ResponsiveGrid from "../components/Responsivegrid";
import React from "react";

// Convert Google Drive share URL to direct-viewable image URL
const convertDriveLink = (url) => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

// Format date string nicely (e.g., April 8, 2025)
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function Home() {
  const response = await fetch("https://property-management-server-chi.vercel.app/events");
  const fetchedData = await response.json();

  // Optional: static events
  const events = [
    {
      id: 1,
      name: "Curiosity corner",
      imgSrc: "/upcoming/poster1.png",
      date: "2024-25",
      description: "This is a description of the event",
    },
  ];

  // Fetched events with formatted dates and Drive image links
  const fetchedEvents = fetchedData.map((item) => ({
    id: item._id,
    name: item.name,
    imgSrc: convertDriveLink(item.img),
    date: formatDate(item.eventDate),
    description: item.description,
  }));

  const combinedEvents = [...events, ...fetchedEvents];

  return (
    <div>
      <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold text-center mb-6">
        Events of 2024-25
      </h1>
      <ResponsiveGrid events={combinedEvents} />
    </div>
  );
}
