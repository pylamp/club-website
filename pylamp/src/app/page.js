export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="xl:w-3/4 w-full m-5 lg:m-0 flex flex-col md:flex-row">
          <div className="text-left space-y-4 ml-4 p-4 self-center">
            <h1 className="lg:text-6xl text-4xl font-bold text-black">
              Welcome <span className="text-orange-500">PyGeeks</span>
            </h1>
            <p className="text-justify md:text-2xl md:w-3/4 text-lg font-normal">
              Join us to empower your coding journey, develop leadership skills,
              and innovate together in a community that values excellence and
              collaboration.
            </p>

            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md">
                <img
                  src="/calendar.png"
                  alt="Calendar Icon"
                  className="h-6 w-8 mr-2"
                />
                Upcoming
              </button>
              <span><i className="ph-light ph-arrow-right text-4xl"></i></span>
            </div>
          </div>
            <img
              src="/pylamp_logo.png"
              alt="PyLamp CSE Logo"
              className="sm:h-60 h-40 self-center"
            />
        </div>
      </div>

      <section className="bg-white mt-5 text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT US</h2>
          <p className="text-lg md:text-xl font-medium text-gray-600">
            Inspiring Coders, Shaping Leaders
          </p>
        </div>

        <div className="flex justify-center p-5">
          <div className="xl:w-3/4 w-full flex flex-col lg:flex-row justify-center lg:justify-between">
            <div className="md:w-1/2 self-center flex justify-center">
              <img
                src="/rocket.png"
                alt="Description of Image"
                className="h-max-96"
              />
            </div>

            <div className="lg:w-1/2 self-center p-5">
              <h3 className="md:text-3xl text-xl font-bold mb-4">OUR MISSION</h3>
              <p className="md:text-xl text-lg font-normal text-left">
                Club PYLAMP promotes problem-solving and updates members on
                Computer Science trends, fostering close community and developing
                student leadership skills.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-5">
          <div className="xl:w-3/4 w-full flex flex-col lg:flex-row justify-center lg:justify-between">
            <div className="lg:w-1/2 self-center p-5">
              <h3 className="md:text-3xl text-xl font-bold mb-4">ENGAGING EVENTS</h3>
              <p className="md:text-xl text-lg font-normal text-left">
                Through workshops, hackathons, and competitions, we transform ideas
                into impactful solutions, providing hands-on experiences and
                opportunities to showcase talent and creativity.
              </p>
            </div>
            <div className="md:w-1/2 self-center flex justify-center">
              <img src="/group.png" alt="Description of Image" className="h-max-96"/>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-5">
          <div className="xl:w-3/4 w-full flex flex-col lg:flex-row justify-center lg:justify-between">
            <div className="md:w-1/2 self-center flex justify-center">
              <img
                src="/about.png"
                alt="Description of Image"
                className="h-max-96"
              />
            </div>

          <div className="lg:w-1/2 self-center p-5">
            <h3 className="md:text-3xl text-xl font-bold mb-4">INCLUSIVE COMMUNITY</h3>
            <p className="md:text-xl text-lg font-normal text-left">
              We value diversity and collaboration, creating a supportive
              environment where everyone can thrive. Our motto: Problem Solving
              Forever!
            </p>
          </div>
        </div>
        </div>
    </section>
    </div>
  );
}
