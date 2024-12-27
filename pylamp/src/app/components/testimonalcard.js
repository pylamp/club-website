import Image from "next/image";

export default function TestimonialCard({ name, role, image, testimonial }) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-3 sm:gap-3 md:gap-1">
        <div className="max-w-lg bg-white rounded-2xl shadow-lg shadow-gray-400 p-5 flex flex-col lg:flex-row items-center gap-3 min-h-[320px] mx-auto">
          <div className="flex-shrink-0">
            <div className="w-26 h-26 md:w-36 md:h-32 lg:w-35 lg:h-36 rounded-full overflow-hidden border-4 border-gray-300">
              <Image
                src={image}
                alt={`${name}'s profile`}
                width={110}
                height={110}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
            <blockquote className="mt-2 text-base text-gray-600 italic leading-relaxed text-center md:text-left">
              "{testimonial}"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
