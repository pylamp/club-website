import TextImgCompoWithCust from "../components/text_img_compo_with_cust";

export default function GalleryPage() {
    const galleryItems = [
        {
            imgSrc: "/gallery/business.png",
            imgAlt: "Two guys handshaking",
            imgPosition: "left",
            text: '"Our strength lies in our <span className= "text-orange-400">unity</span>. At Pylamp, members collaborate, share ideas, and support each other. We believe in the <span className=" text-orange-400">power of teamwork</span> to achieve greatness and drive technological advancements."'
        },
        {
            imgSrc: "/gallery/highlights/im1.png",
            imgAlt: "Lamin mohhammed Speaking",
            imgPosition: "right",
            text: '"Participants enthusiastically engage in solving tech puzzles at the <span className="text-orange-400">Techie Tangram </span>event, showcasing their creativity and problem-solving skills."'
        },
        {
            imgSrc: "/gallery/highlights/im2.png",
            imgAlt: "Pylamp core team group photo",
            imgPosition: "left",
            text: '"Students actively participating in a hands-on <span className="text-orange-400">Git and GitHub session</span>, learning essential version control concepts to enhance their coding collaboration skills."'
        },
        {
            imgSrc: "/gallery/highlights/im3.png",
            imgAlt: "Seniors correcting answer sheets",
            imgPosition: "right",
            text: '"Seniors mentors assist juniors in a lively <span className="text-orange-400">ice-breaking session</span>, providing insights to help them choose their career paths."'
        },
        {
            imgSrc: "/gallery/highlights/im4.png",
            imgAlt: "Sanjay anna speaking at an event",
            imgPosition: "left",
            text: '"Participants challenge their logical thinking and problem-solving skills in the engaging <span className="text-orange-400">Solvide session</span>."'
        },
        {
            imgSrc: "/gallery/highlights/im5.png",
            imgAlt: "Mentors guiding students",
            imgPosition: "right",
            text: '"Explore various career paths and gain insights into different domains during the <span className="text-orange-400">Domain Realm session</span>, guided by experienced mentors."'
        }
    ];

    return (
        <div>
            <main className="w-full">
                <h1 className="md:text-5xl text-2xl font-bold text-center m-2 uppercase">Our Gallery</h1>
                <p className="md:text-2xl text-lg text-center">Explore our latest events and activities!</p>
                <div className="flex flex-col md:flex-row justify-center w-full">
                    <div className="sm:p-5 max-w-6xl border-4 shadow-xl border-gray-500 rounded-lg m-5">
                        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                            <img src="/gallery/grp.png" alt="Gallery Image 1" className="w-full h-full col-span-2" />
                            <img src="/gallery/sanjay.png" alt="Gallery Image 2" className="w-full" />
                        </div>
                        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4">
                            <div className="text-center bg-gray-300 rounded-xl m-3 md:text-4xl sm:text-2xl text-sm sm:p-5 p-3 font-semibold content-center">
                                <p>"Together We Code</p>
                                <p>Together We Grow"</p>
                            </div>
                            <img src="/gallery/team.png" alt="Gallery Image 3" className="w-full" />
                        </div>
                    </div>
                </div>
            </main>
            <div>
                {galleryItems.map((item, index) => (
                    <div key={index}>
                        <TextImgCompoWithCust imgSrc={item.imgSrc} imgAlt={item.imgAlt} imgPosition={item.imgPosition}>
                            <p className="text-justify">
                                {item.text.split(/(<span.*?>.*?<\/span>)/g).map((part, i) => 
                                    part.startsWith('<span') ? 
                                        <span key={i} className={part.match(/className="(.*?)"/)?.[1]}>{part.replace(/<.*?>/g, '')}</span> 
                                        : part
                                )}
                            </p>
                        </TextImgCompoWithCust>
                        <hr className="border border-slate-500"></hr>
                    </div>
                ))}
            </div>
        </div>
    );
}