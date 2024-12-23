// ResponsiveGrid.js
import Image from "next/image";

const ResponsiveGrid = () => {
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
    <div className=" min-h-screen py-8 flex flex-col justify-between">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Events of 2024-25
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="w-full max-w-[636px] mx-auto">
              <div className="relative aspect-square">
                <Image
                  src={event.imgSrc}
                  alt={event.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <p className="text-center mt-2 text-sm font-medium">
                {event.name}
              </p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default ResponsiveGrid;
