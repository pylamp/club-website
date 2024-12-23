export default function GalleryPage() {
    return(
        <div>
            <main className="flex w-full justify-center">
                <div className="flex justify-center m-5 sm:w-3/4 self-center">
                    <div className="bg-slate-200 lg:w-1/2 p-5 text-center self-center">
                        <h2 className="lg:text-2xl text-md">"Catch the Excitement! Join Our Upcoming Events and Dive into New Opportunities!"</h2>
                    </div>
                </div>
            </main>
            <div className="mt-20 mb-5">
                <h2 className="lg:text-6xl sm:text-3xl text-xl font-bold text-center uppercase">Coming Soon....</h2>
            </div>
            <div className="flex w-full flex-col h-full">
                <div className="mb-10 p-5 justify-center w-full flex">
                    <img src="/upcoming/poster1.png" alt="Upcoming Events" className="xl:max-w-5xl lg:max-w-2xl sm:max-w-lg w-60 sm:w-full self-center" />
                </div>
            </div>
        </div>
    );
}