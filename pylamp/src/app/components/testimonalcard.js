import Image from "next/image";

export default function TestimonialCard({ name, role, image, testimonial }) {
  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg shadow-gray-400 p-8 flex items-center gap-8 min-h-[340px]">
      {" "}
      
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
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
        <blockquote className="mt-4 text-base text-gray-600 italic leading-relaxed">
          "{testimonial}"
        </blockquote>
      </div>
    </div>
  );
}
