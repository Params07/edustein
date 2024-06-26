import React,{useContext,useEffect,useRef} from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { GlobalStateContext } from "../UseContextComponents/GlobalStateProvider";

function ExplorerData({ explorerData, handleProgram }) {
    const { openRegisterForm} = useContext( GlobalStateContext);
    const explorerRef = useRef(null);
    useEffect(() => {
        if (explorerRef.current) {
            explorerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    
    
    return (
        <>
            <div ref={explorerRef} id="program"  className="bg-[#0c2543] pt-20">
                <div className="p-4 pt-4 sm:p-16 md:p-24 font-redhat">
                    <div className="bg-white rounded-lg p-8 grid gap-8 sm:gap-12">
                        <div className="flex justify-between">
                            <div>
                                <span className="text-navItems font-bold text-2xl sm:text-3xl">Discover Your Passion, Define Your Future</span>
                            </div>
                            <div>
                                <button title="back" className="text-line text-3xl" onClick={handleProgram}><IoArrowBackCircleSharp /></button>
                            </div>
                        </div>
                        <div>
                            <span className="text-line font-bold text-2xl sm:text-3xl">{explorerData.title}</span>
                        </div>
                        <div>
                            <span className="text-[#545454] font-normal text-lg sm:text-xl sm:text-2xl">{explorerData.define}</span>
                        </div>
                        {
                            explorerData.questions.map((data, index) => (
                                <div key={index} className="text-[#545454] font-normal text-base sm:text-2xl grid gap-4 sm:gap-8">
                                    <div>
                                        <span>
                                            {data.question}
                                        </span>
                                    </div>
                                    <div className="text-[#545454] font-normal  grid gap-4 sm:gap-8">
                                        {data.sections.map((content, index) => (
                                            <div key={index}>
                                                <span className="text-base sm:text-xl md:text-2xl ">
                                                    {content.title}
                                                </span>
                                                {content.content.map((con, index) => (
                                                    <div key={index}>
                                                        <span className="text-sm sm:text-xl md:text-2xl ">
                                                            - {con}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                        <div>
                            <span className="text-[#545454] font-normal text-lg sm:text-xl md:text-2xl">{explorerData.conclusion}</span>
                        </div>
                        <div className="text-center">
                            <span className="text-navItemns font-bold text-2xl sm:text-3xl ">{explorerData.slogan}</span>
                        </div>
                        <div className="w-full">
                            <button onClick={()=>{openRegisterForm()}} className="  border-2 border-line hover:text-line hover:bg-white text-white bg-line w-full h-12 sm:h-16 rounded-md font-bold text-lg sm:text-2xl">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExplorerData;
