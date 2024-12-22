export default function TextImgCompoWithCust({ imgSrc, imgAlt, imgPosition, children }) {
    return (
        <div className="flex justify-center p-5">
            <div className="xl:w-3/4 w-full flex flex-col lg:flex-row justify-center lg:justify-between">
                {imgPosition === 'left' && (
                    <div className="md:w-2/5 self-center flex flex-col">
                        <img src={imgSrc} alt={imgAlt} className="lg:h-80 sm:h-60 h-40 self-center" />
                    </div>
                )}
                <div className="lg:w-3/5 w- self-center p-5">
                    <div className="md:text-3xl text-xl text-left">
                        {children}
                    </div>
                </div>
                {imgPosition === 'right' && (
                    <div className="md:w-2/5 self-center flex flex-col">
                        <img src={imgSrc} alt={imgAlt} className="lg:h-80 sm:h-60 h-40 self-center" />
                    </div>
                )}
            </div>
        </div>
    );
}
