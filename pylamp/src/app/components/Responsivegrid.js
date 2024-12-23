// ResponsiveGrid.js
import Image from "next/image";

const ResponsiveGrid = ({ events }) => {
  return (
    <div className="flex flex-col w-full justify-center">
      <div className="xl:w-3/4 w-full self-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:p-10 p-5">
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
