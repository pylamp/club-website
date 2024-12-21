import TextImgCompo from "../components/text_img_compo";

export default function GalleryPage() {
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
                <TextImgCompo imgSrc={"/gallery/business.png"} imgAlt={"Two guys handshaking"} title={""} desc={"Our strength lies in our unity. At Pylamp, members collaborate, share ideas, and support each other. We believe in the power of teamwork to achieve greatness and drive technological advancements."} imgPosition={"left"} />
            </div>
        </div>
    );
}