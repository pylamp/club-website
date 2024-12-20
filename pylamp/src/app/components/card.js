import Image from "next/image";

export default function Card() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-64 h-72 border-2 border-gray-200 rounded-xl shadow-md flex flex-col items-center justify-between p-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-red-500">Tech Wizard</h2>

        <div className="w-24 h-24 border-2 border-gray-300 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/profile.png"
            alt="profile"
            width={106} 
            height={106} 
            className="object-cover" 
          />
        </div>

        {/* Name and Role */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">Sudarsan M</h3>
          <p className="text-sm text-gray-500">Backend Developer</p>
        </div>
      </div>
    </div>
  );
}
