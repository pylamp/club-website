export default function HonoureesPage() {
    return (
        <div>
            <main className="flex w-full justify-center">
                <div className="flex m-5 xl:w-3/4 self-center sm:flex-row flex-col">
                    <img src="/honourees/im1.png" alt="A girl holding medal in hand" className="lg:w-96 md:w-80 sm:w-40 w-32 self-center" />
                    <h3 className="lg:text-4xl sm:text-2xl text-lg font-bold self-center text-center py-5 sm:p-0">"Honoring top performers in different areas of excellence."</h3>
                </div>
            </main>
            <div className="flex flex-col justify-center w-full">
                <div className="flex xl:w-3/4 self-center">
                    <div className="flex sm:p-10 flex-col md:flex-row">
                        <img src="/honourees/events/poster1.png" className="md:w-1/2 lg:max-w-md max-w-xs self-center p-5 w-60"/>
                        <div className="flex flex-col p-5">
                            <h4 className="md:text-4xl text-xl font-bold py-5">Event Description :</h4>
                            <p className="md:text-2xl text-md font-medium">"Honoring top performers in different areas of excellence."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}