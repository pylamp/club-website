export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT US</h2>
        <p className="text-lg md:text-xl font-medium text-gray-600">
          Inspiring Coders, Shaping Leaders
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image */}
        <div className="w-64 md:w-72">
          <img
            src="/path_to_image/rocket_image.png"
            alt="Rocket Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Mission Text */}
        <div className="text-center md:text-left max-w-lg">
          <h3 className="text-xl font-semibold mb-4">OUR MISSION</h3>
          <p className="text-lg leading-relaxed">
            Club PYLAMP promotes problem-solving and updates members on Computer
            Science trends, fostering close community and developing student
            leadership skills.
          </p>
        </div>
      </div>
    </section>
  );
}
