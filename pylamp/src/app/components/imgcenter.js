export default function Imgcenter({
  imgSrc,
  imgAlt,
  title,
  subtitle, 
  desc,
  imgPosition,
}) {
  return (
    <div className="flex justify-center p-5">
      <div className="xl:w-3/4 w-full flex flex-col lg:flex-row justify-center lg:justify-between">
        {imgPosition === "left" && (
          <div className="md:w-1/2 self-center flex">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="lg:h-80 sm:h-60 h-40 rounded-full"
            />
          </div>
        )}
        <div className="lg:w-1/2 self-center p-5">
          <h3 className="md:text-3xl text-xl font-bold mb-2 text-red-500">
            {title}
          </h3>
          <h4 className="md:text-2xl text-lg font-bold mb-4 text-black">
            {subtitle}
          </h4>{" "}
          {/* Subtitle added */}
          <p className="md:text-xl text-lg font-normal text-left">{desc}</p>
        </div>
        {imgPosition === "right" && (
          <div className="md:w-1/2 self-center flex flex-row-reverse">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="lg:h-80 sm:h-60 h-40 rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}
