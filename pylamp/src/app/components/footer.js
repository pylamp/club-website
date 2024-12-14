export default function Footer() {
    return (
        <div className="flex p-5 bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900">
            <div className="flex w-full justify-center">
                <div className="flex lg:w-3/4 justify-between">
                    <img className="hidden md:block h-44 mx-5" src="/small_girl.png" alt="A girl reading" />
                    <div className="mx-5 flex md:h-40 sm:self-end self-center w-full justify-between md:flex-row flex-col">
                        <div className="flex sm:flex-row flex-col">
                            <img className="sm:h-14 sm:w-16 w-32 self-center sm:self-auto" src="/pylamp_logo.png" alt="Pylamp logo" />
                            <div>
                                <h3 className="text-2xl text-orange-400 font-bold">Club Pylamp</h3>
                                <p className="text-blue-500 text-sm">clubpylampofficial@gmail.com</p>
                                <div className="mt-5">
                                    <p className="text-white text-sm">Department of CSE</p>
                                    <p className="text-white text-sm">Velalar College of Engineering and Technology,</p>
                                    <p className="text-white text-sm">Thindal, Erode</p>
                                </div>
                            </div>
                        </div>
                        <div className="self-end m-5">
                            <p className="uppercase text-white text-sm font-semibold">Follow us</p>
                            <div className="flex flex-wrap">
                                <img src="/discord.png" className="h-10 m-2"/>
                                <img src="/insta.png" className="h-10 m-2"/>
                                <img src="/linkedin.png" className="h-10 m-2"/>
                                <img src="/gmail.png" className="h-10 m-2"/>
                                <img src="/youtube.png" className="h-10 m-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};