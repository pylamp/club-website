export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-12">
        <div className="md:w-3/5 text-left space-y-4 ml-4 p-4">
          <h1 className="text-6xl font-bold text-gray-800">
            Welcome <span className="text-orange-500">PyGeeks</span>
          </h1>
          <p className="text-justify font-poppins text-[30px] font-normal leading-[54px] tracking-[0.03em] decoration-skip-ink-none">
            Join us to empower your coding journey, develop leadership skills,
            and innovate together in a community that values excellence and
            collaboration.
          </p>

          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
              <img
                src="/pylamp_logo.png"
                alt="Upcoming Icon"
                className="h-6 w-6 mr-2"
              />
              Upcoming
            </button>
            <span className="text-2xl text-gray-800">→</span>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <img
            src="/pylamp_logo.png"
            alt="PyLamp CSE Logo"
            className="h-72 w-auto"
          />
        </div>
      </div>

      <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT US</h2>
          <p className="text-lg md:text-xl font-medium text-gray-600">
            Inspiring Coders, Shaping Leaders
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="w-full md:w-[519px] h-auto md:h-[435px]">
            <img
              src="/rocket.png"
              alt="Description of Image"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-left md:text-left max-w-[748px] h-auto mt-9 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">OUR MISSION</h3>
            <p className="font-poppins text-[31px] font-normal leading-[49px] tracking-[0.02em] text-left decoration-skip-ink-none">
              Club PYLAMP promotes problem-solving and updates members on
              Computer Science trends, fostering close community and developing
              student leadership skills.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-10 p-8 md:p-12 md:m-6">
        <div className="w-full md:w-[519px] h-auto md:h-[435px]">
          <img
            src="/group.png"
            alt="Description of Image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-left md:text-left max-w-[748px] h-auto mt-9 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">ENGAGING EVENTS</h3>
          <p className="font-poppins text-[31px] font-normal leading-[49px] tracking-[0.02em] text-left decoration-skip-ink-none">
            Through workshops, hackathons, and competitions, we transform ideas
            into impactful solutions, providing hands-on experiences and
            opportunities to showcase talent and creativity.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 p-8 md:p-12 md:m-6">
        <div className="w-full md:w-[519px] h-auto md:h-[435px]">
          <img
            src="/about.png"
            alt="Description of Image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-left md:text-left max-w-[748px] h-auto mt-9 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-4">INCLUSIVE COMMUNITY</h3>
          <p className="font-poppins text-[32px] font-normal leading-[49px] tracking-[0.02em] text-left decoration-skip-ink-none">
            We value diversity and collaboration, creating a supportive
            environment where everyone can thrive. Our motto: Problem Solving
            Forever!
          </p>
        </div>
      </div>
    </div>
  );
}
