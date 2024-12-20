"use client";
import { useEffect, useRef } from "react";

export default function Card() {
  const cardData = [
    { title: "Tech Wizard", imgSrc: "/profile.png", name: "Sudarsan M", role: "Backend Developer" },
    { title: "Frontend Guru", imgSrc: "/profile.png", name: "Alice B", role: "Frontend Developer" },
    { title: "UI/UX Specialist", imgSrc: "/profile.png", name: "John D", role: "Designer" },
    { title: "DevOps Master", imgSrc: "/profile.png", name: "Jane S", role: "DevOps Engineer" },
    { title: "Data Scientist", imgSrc: "/profile.png", name: "Mike T", role: "Data Scientist" },
    { title: "AI Expert", imgSrc: "/profile.png", name: "Sara K", role: "AI Engineer" },
    { title: "Security Analyst", imgSrc: "/profile.png", name: "Tom R", role: "Security Analyst" },
    { title: "Project Manager", imgSrc: "/profile.png", name: "Emma W", role: "Project Manager" },
    { title: "QA Tester", imgSrc: "/profile.png", name: "Chris P", role: "QA Tester" },
    { title: "Full Stack Dev", imgSrc: "/profile.png", name: "Liam N", role: "Full Stack Developer" },
  ];

  const listRef = useRef(null);

  useEffect(() => {
    const ul = listRef.current;
    // Duplicate the list to create an infinite scrolling effect
    ul.insertAdjacentHTML("afterend", ul.outerHTML);
    const duplicate = ul.nextSibling;
    duplicate.setAttribute("aria-hidden", "true");

    // Clean up on unmount
    return () => {
      if (duplicate) {
        duplicate.remove();
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          ref={listRef}
          className="flex items-center justify-start whitespace-nowrap animate-infinite-scroll"
        >
          {cardData.map((data, index) => (
            <li key={index} className="w-60 h-80 border-2 border-gray-200 rounded-xl shadow-md flex flex-col items-center justify-between p-4 m-2">
              <h2 className="text-xl font-bold text-red-500 text-center truncate w-60">
                {data.title}
              </h2>
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center">
                <img src={data.imgSrc} alt={data.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold truncate w-full">{data.name}</h3>
                <p className="text-sm text-gray-500 truncate w-full">{data.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
