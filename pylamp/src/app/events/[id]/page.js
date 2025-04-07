// app/events/[id]/page.js
import ResponsiveGrid from "@/app/components/Responsivegrid";
import Image from "next/image";
import React from "react";

// Convert shared Google Drive links to direct image links
const convertDriveLink = (url) => {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
};

// Fetch event data from the server
async function getEvent(id) {
  const res = await fetch(`https://property-management-server-chi.vercel.app/events/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();

  return {
    ...data,
    img: convertDriveLink(data.img),
    eventDate: new Date(data.eventDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}

export default async function EventDetail({ params }) {
    const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return <p className="text-center text-red-500 mt-10">Event not found</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 h-screen px-4">
        <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold text-center mb-6">
            {event.name}
        </h1>
        <div className="flex flex-col items-center justify-center mt-10">
            <Image
            src={event.img}
            alt={event.name}
            width={500}
            height={500}
            className="rounded-lg"
            />
            <p className="font-bold text-lg text-gray-700 mt-4">Event Date: {event.eventDate}</p>
            <p className="text-base mt-2 text-gray-600">{event.description}</p>
        </div>
    </div>
  );
}
