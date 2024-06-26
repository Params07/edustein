function ProgramsList({ programs, handleProgram, setId }) {
    return (
        <div className="bg-[#0c2543] w-full p-4 sm:p-8 xl:p-16">
            <div className="bg-[#2E3B4E] py-6 rounded-md">
                <div className="text-center font-redhat">
                    <span className="text-white font-bold text-3xl">Our Programs</span>
                </div>
                <div className="p-4 md:p-6 xl:p-16 grid gap-8 lg:grid-cols-2 place-items-center font-redhat">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="pb-6 sm:pb-0 w-[18rem] md:w-[32rem] sm:w-[26rem] lg:w-[28rem] xl:w-[30rem] 2xl:w-[34rem]  h-[29rem] sm:h-[32rem]  
                             lg:h-[33.5rem] 2xl:h-[34.875rem] bg-white rounded-md md:rounded-xl p-4 xl:p-8"
                        >
                            <div>
                                <span className="font-redhat font-semibold text-xl xl:text-2xl">{program.title}</span>
                            </div>
                            <div className="  w-full  h-[14.5rem] sm:h-[18rem] md:h-[19rem]  2xl:h-2/3 xl:h-[18rem]
                             flex justify-center text-[#0D2443]">
                                <img src={program.src} className="mx-auto object-contain h-full w-48 sm:w-[12rem]  md:w-[15rem] lg:w-[16rem] xl:w-[16rem]" alt={program.title} />
                            </div>
                            <div className="my-4 font-redhat font-normal sm:font-semibold text-sm sm:text-base text-[#44544ADE]">
                                <span>{program.content}</span>
                            </div>
                            <div className="w-full h-8 mt-4 font-redhat">
                                <button
                                    onClick={() => {
                                        handleProgram();
                                        setId(index);
                                        console.log(index);
                                    }}
                                    className="bg-line border-2 border-line hover:text-line hover:bg-white text-white w-full py-2 rounded"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProgramsList;
