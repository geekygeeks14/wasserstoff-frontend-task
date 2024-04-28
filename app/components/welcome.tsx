"use client"
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

const Welcome = () => {
    const router = useRouter()

    //Redirect on Artist Page after 5 second
    useEffect(() => {
        setTimeout(() => {
            router.push('/artist', { scroll: false })
        }, 8000);
    }, [])

    // Welcome page code
    return (
        <div className="h-screen w-full flex flex-col" style={{ backgroundColor: "#fafedb" }}>
            {/* logo section */}
            <div className="h-2/6 animate-shrink-left-to-right-and-back infinite">
                <div className="pt-12">
                    <img className="ml-10" src="./logo.png" />
                </div>
            </div>

            {/* animated card section */}
            <div className="h-4/6 flex-row justify-center items-center">
                <div className="h-1/5 flex justify-center mb-2">
                    <div className="w-full flex flex-row justify-center items-center">
                        <div className="w-2/5 flex flex-row justify-start items-center">
                            <p className="text-xl md:text-3xl lg:text-5xl font-medium font-sans mt-1 md:mt-0 md:mr-2">
                                WE
                            </p>
                            <div className="w-1/2 md:w-auto">
                                <img className="w-full h-auto object-contain" src="./img1.png" alt="Image1" />
                            </div>
                        </div>
                        <div className="w-2/5 h-full flex flex-row justify-start items-center animate-slide-left-to-right-and-back-4 infinite" style={{ backgroundColor: "#fafedb" }}>
                            <p className="text-xl md:text-3xl lg:text-5xl font-medium font-sans mt-1 md:mt-0 md:mr-2">
                                ORGANIZE THE
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-1/5 flex justify-center  mt-1 mb-2" style={{ backgroundColor: "#fafedb" }}>
                    <div className="w-full flex flex-row justify-center items-center">
                        <div className="w-2/5 flex flex-row justify-start items-center">
                            <p className="text-xl md:text-3xl lg:text-5xl font-medium font-sans mt-1 md:mt-0 md:mr-2">
                                CONNECTION</p>
                        </div>
                        <div className="w-2/5 flex flex-row justify-start items-center">
                            <div className="w-full h-full md:w-auto animate-slide-left-to-right-and-back infinite">
                                <img className="w-full h-auto object-contain" src="./img2.png" alt="img2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-1/5 flex justify-center mb-2">
                    <div className="w-1/5 flex flex-row justify-start items-center">
                        <div className="w-full h-full md:w-auto">
                            <img className="w-full h-auto object-contain" src="./img3.png" alt="img3" />
                        </div>
                    </div>
                    <div className="w-3/5 flex flex-row align-middle justify-start animate-slide-left-to-right-and-back-3 infinity" style={{ backgroundColor: "#fafedb" }}>
                        <p className="text-xl md:text-3xl lg:text-5xl font-medium font-sans mt-1 md:mt-0 md:mr-2">BETWEEN</p>
                        <div className="w-1/2 md:w-auto">
                            <img className="w-full h-auto object-contain" src="./img4.png" alt="Image4" />
                        </div>
                        <p className="text-xl md:text-3xl lg:text-5xl font-medium font-sans mt-1 md:mt-0 md:mr-2 pl-2">MUSIC</p>
                    </div>
                </div>
                <div className="h-1/5 flex justify-center  mb-2">
                    <div className="w-2/5 flex flex-row justify-start items-center" >
                        <p className="text-xl md:text-3xl lg:text-5xl font-medium font-sans mt-1 md:mt-0 md:mr-2">
                            ARTIST
                        </p>
                        <div>
                            <img src="./img5.png" alt="img5" />
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-row justify-center items-center animate-slide-left-to-right-and-back-2 infinite" style={{ backgroundColor: "#fafedb" }}>
                        <p className="text-xl md:text-3xl lg:text-5xl font-medium font-sans md:mt-0 md:mr-2 mt-1">
                            CULTURE
                        </p>
                        <div>
                            <img src="./img6.png" alt="img6" />
                        </div>
                    </div>
                </div>
                <div className="h-1/5 flex justify-center mb-2 mt-1">
                    <div className="w-1/5">
                        <div className="w-1/2 md:w-auto animate-grow-left-to-right-and-back infinte">
                            <img className="w-full h-auto object-contain" src="./img7.png" alt="img6" />
                        </div>
                    </div>
                    <div className="w-3/5 flex flex-row justify-start item-center animate-slide-left-to-right-and-back-3 infinity" style={{ backgroundColor: "#fafedb" }}>
                        <p className="text-xl md:text-4xl lg:text-5xl font-medium font-sans mt-1 md:mt-0 md:mr-2 ">ART</p>
                        <div className="w-1/2 md:w-auto">
                            <img className="w-full md:w-24 xl:w-full h-auto object-contain" src="./img8.png" alt="img8" />
                        </div>
                        <p className="text-xl md:text-4xl lg:text-5xl font-medium font-sans mt-1 md:mt-0 md:mr-2">& COLLECTIONS</p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Welcome; //export the module on page.tsx file