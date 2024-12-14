import TextImgCompo from "./components/text_img_compo";

export default function HomePage() {
  // List of data for TextImgCompo
  const textImgData = [
    {
      imgSrc: "/rocket.png",
      imgAlt: "rocket image",
      title: "Our Mission",
      desc: "Club PYLAMP promotes problem-solving and updates members on Computer Science trends, fostering close community and developing student leadership skills.",
      imgPosition: "left",
    },
    {
      imgSrc: "/group.png",
      imgAlt: "group image",
      title: "ENGAGING EVENTS",
      desc: "Through workshops, hackathons, and competitions, we transform ideas into impactful solutions, providing hands-on experiences and opportunities to showcase talent and creativity.",
      imgPosition: "right",
    },
    {
      imgSrc: "/about.png",
      imgAlt: "about image",
      title: "INCLUSIVE COMMUNITY",
      desc: "We value diversity and collaboration, creating a supportive environment where everyone can thrive. Our motto: Problem Solving Forever!",
      imgPosition: "left",
    },
  ];

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
              <span>
                <i className="ph-light ph-arrow-right text-4xl"></i>
              </span>
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

        {/* Map through textImgData to render TextImgCompo components */}
        {textImgData.map((item, index) => (
          <TextImgCompo
            key={index}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            desc={item.desc}
            imgPosition={item.imgPosition}
          />
        ))}
      </section>
    </div>
  );
}
