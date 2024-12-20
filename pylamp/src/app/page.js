import TextImgCompo from "./components/text_img_compo";
import Imgcenter from "./components/imgcenter";
import ProfileCard from "./components/card";
import TestimonialCard from "./components/testimonalcard";

export default function HomePage() {
  
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

    const imgCenterData = [
      {
      imgSrc: "/profile.png",
      imgAlt: "PyLamp CSE Logo",
      title: "Club Advisor",
      subtitle: "Nandhini M",
      desc: "Assistant Professor, Department of Computer Science and Engineering, VCET",
      imgPosition: "left",
    }, 
    {
      imgSrc: "/profile.png",
      imgAlt: "PyLamp CSE Logo",
      title: "Club Mentor",
      subtitle: "Vidhya S",
      desc: "Assistant professor, Department of Computer Science and Engineering, VCET",
      imgPosition: "right",
    },
  ];

  const testimonials = [
    {
      name: "John D",
      role: "Software Developer",
      image: "/ts1.png", // Add actual image paths here
      testimonial:
        "Joining PyLamp has been a game-changer for me. The community is incredibly supportive and knowledgeable.",
    },
    {
      name: "Jane S",
      role: "Frontend Developer",
      image: "/ts2.png",
      testimonial:
        "The support and resources available in PyLamp helped me excel in my career.",
    },
    {
      name: "Mike T",
      role: "Backend Engineer",
      image: "/ts2.png",
      testimonial:
        "I learned a lot from the discussions and projects in this amazing community.",
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
      <section className="flex items-center justify-center w-full">
        <div className="relative w-4/5 md:w-3/4 lg:w-2/3 lg:h-128 h-96">
          <img
            src="/new.png"
            alt="Centered Image"
            className="w-full h-full object-contain"
          />
          <a
            href="/your-target-page"
            className="absolute bottom-3 left-5 md:left-50 sm:left-10 xs:static xs:mt-4 w-[194.82px] rounded-[25px] bg-black text-white py-2 px-4 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center z-10"
          >
            Honorees
          </a>
        </div>
      </section>

      <section className="bg-white mt-8 text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg md:text-xl font-medium text-gray-600">
            Together towards victory
          </p>
        </div>

        {/* Map through imgCenterData to render Imgcenter components */}
        {imgCenterData.map((item, index) => (
          <Imgcenter
            key={index}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            subtitle={item.subtitle}
            desc={item.desc}
            imgPosition={item.imgPosition}
          />
        ))}
      </section>

      <ProfileCard />

      <section className="bg-white mt-8 text-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog News</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[900px] p-4 rounded-[70px] overflow-hidden ">
            <img
              src="blog.png" // Replace with your image URL
              alt="Description of the image"
              className="w-full h-auto object-cover transition-opacity duration-500 ease-in-out"
            />
          </div>
          <p className="mt-4 text-lg md:text-m text-gray-600 max-w-2xl font-bold text-center">
            Short Blog Description
          </p>
        </div>
      </section>

      <section className=" py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Testimonials
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
