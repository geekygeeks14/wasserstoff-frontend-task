"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });

//image Array for carousal
const images = ["./Boy.png", "./device.png", "./coffee.png", "./girl.png"]

const Artist = () => {
    const router = useRouter()

    //Redirect on welcome page after 5 second
    useEffect(() => {
        setTimeout(() => {
            router.push('/', { scroll: false })
        },10000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
            <div className="flex flex-col h-screen w-full md:flex-row" style={{ backgroundColor: "#15171b" }}>
                <div className="w-full md:w-2/4">
                    <div className="w-full pt-4 md:h-1/5">
                        <img className="ml-10" src="./astrix.png" alt="logo" />
                    </div>
                    {/* carousal code */}
                    <div className="flex flex-row h-4/5">
                        <Carousel images={images} />
                    </div>

                </div>

                {/* Event slide section */}
                <div className="w-full md:w-16 flex flex-col md:mt-2 mt-10" style={{ backgroundColor: "rgb(181 28 229)" }}>
                    <div className="h-full overflow-clip animatedElement infinity">
                        <p className="text-xl md:text-3xl md:rotate-90 font-normal font-sans whitespace-nowrap">
                            Event: Oasis Bus tour,JLN stadium, Delhi * Collection Live: Meta
                        </p>
                    </div>
                </div>

                {/* Event information section */}
                <div className="w-full md:w-2/5 flex flex-col bg-red" style={{ backgroundColor: "#15171b" }}>
                    <div className="h-1/5">
                        <div className="w-3/4 flex p-5">
                            <p className="text-xl md:text-3xl lg:text-4xl font-medium font-sans mt-1 md:mt-0 md:mr-2 text-white">
                                Explore Your First Event</p>
                        </div>
                    </div>
                    <div className="h-2/5 flex flex-col p-4">
                        <p className="text-xl lg:text-5xl md:text-3xl font-bold font-sans mt-1 md:mt-0 md:mr-2 text-white">Event Name</p>
                        <div className="flex items-center mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{ fill: "white" }}>
                                <path d="M12 0C7.934 0 5 2.916 5 7c0 1.63.486 3.189 1.4 4.469 1.357 1.744 3.412 3.381 5.6 5.719 2.188-2.338 4.243-3.976 5.6-5.719C18.514 10.189 19 8.63 19 7c0-4.084-2.934-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                            </svg>
                            <p className="text-xl md:text-xl font-medium font-sans md:mt-0 md:mr-2 text-white">Venue </p>
                            <p className="text-xl md:text-xl font-medium font-sans md:mt-0 md:mr-2 text-white">04/3/2024  @19:00</p>
                        </div>
                        <div className="w-3/5 mt-4">
                            <p className="font-medium font-sans mt-1 md:mt-0 md:mr-2 text-white">
                                Lorem ipsum dolor sit amet
                                consectetur.Ac lorem massa in morbi
                                et sed ipsum. Pellentesque mattis
                                condimentum ut nulla
                            </p>
                        </div>

                    </div>
                    <div className="md:h-1/5 xl:h-1/5 flex flex-col md:mt-28 lg:mt-2">
                        <div className="flex flex-col p-4">
                            <p className="text-xl md:text-sm xl:text-4xl font-medium font-sans md:mt-7 md:mr-2 text-white">Artist Lineup</p>
                        </div>
                        <div className="flex justify-center items-center md:mt-0 md:h-auto">
                            <img className="skew-y-3 md:w-20 lg:h-28" src="./boy2.png" alt="boy1" />
                            <img src="./boy1.png" alt="boy2" className="md:w-30 md:h-28 lg:h-auto" />
                            <img className="skew-y-2 md:w-20 lg:h-28" src="./boy3.png" alt="boy3" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Artist;