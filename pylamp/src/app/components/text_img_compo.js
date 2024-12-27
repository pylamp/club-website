export default function TextImgCompo({
  imgSrc,
  imgAlt,
  title,
  desc,
  imgPosition,
}) {
  return (
    <div className="flex justify-center">
      <div
        className={`xl:w-3/4 w-full flex flex-col lg:flex-row justify-center ${
          imgPosition === "right" ? "flex-col-reverse" : ""
        }`}
      >
        {imgPosition === "left" && (
          <div className="md:w-2/5 self-center flex p-5">
            <img src={imgSrc} alt={imgAlt} className="lg:h-70 sm:h-60 h-40" />
          </div>
        )}
        <div className="lg:w-3/5 self-center p-5 flex flex-col">
          <h3 className="md:text-3xl text-xl font-bold mb-4">{title}</h3>
          <p className="md:text-xl text-lg font-normal text-left">{desc}</p>
        </div>
        {imgPosition === "right" && (
          <div className="md:w-2/5 self-center flex flex-col p-5">
            <img src={imgSrc} alt={imgAlt} className="lg:h-70 sm:h-60 h-40" />
          </div>
        )}
      </div>
    </div>
  );
}
