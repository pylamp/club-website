import React from 'react';

export default function TextImgCompo({ imgSrc, imgAlt, title, desc, imgPosition }) {
    return (
        <div className="flex justify-center p-5">
            <div className="xl:w-3/4 w-full flex flex-col lg:flex-row justify-center lg:justify-between">
                {imgPosition === 'left' && (
                    <div className="md:w-1/2 self-center flex justify-center">
                        <img src={imgSrc} alt={imgAlt} className="h-max-96" />
                    </div>
                )}
                <div className="lg:w-1/2 self-center p-5">
                    <h3 className="md:text-3xl text-xl font-bold mb-4">{title}</h3>
                    <p className="md:text-xl text-lg font-normal text-left">{desc}</p>
                </div>
                {imgPosition === 'right' && (
                    <div className="md:w-1/2 self-center flex justify-center">
                        <img src={imgSrc} alt={imgAlt} className="h-max-96" />
                    </div>
                )}
            </div>
        </div>
    );
}