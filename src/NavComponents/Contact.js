import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
      <div   id="contact" className=" section flex flex-col space-y-8 bg-[#0c2543]">
         <div className="  md:pt-88 w-full bg-[#0c2543] font-redhat pt-16 h-[22rem] max-h-[22rem] md:pb-12 lg:pb-12 pb-12">
            <div className="mx-4 md:mx-8 xl:mx-16  bg-[#2E3B4E] py-6 rounded-md grid gap-8 place-items-center 2xl:flex 
             grid items-center space-y-4 md:space-y-0 md:space-x-4 
               py-8  px-6 md:px-[91px] md:py-[65px]">
                <div className="items-center md:pl-16 lg:pl-0 pl-0 flex justify-center w-full  2xl:w-[30rem]">
                    <span className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        Are you ready to get your best career path?
                    </span>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center w-full md:w-auto">
                    <input
                        className="h-12 w-full sm:h-14 md:w-[20rem] lg:w-[26rem] px-6 sm:py-3 text-navItems text-base sm:text-2xl rounded-lg focus:outline-none"
                        placeholder="Email address"
                    />
                    <button className="h-12  border-4 border-line hover:text-line hover:bg-white  bg-line text-white font-bold rounded-lg sm:py-3 px-16 text-base sm:text-2xl sm:h-full w-full md:w-auto">
                        Contact
                    </button>
                </div>
            </div>
        </div>
       
        <div className="  h-full bg-[#0c2543]  w-full font-redhat ">
           <div className=" bg-white rounded-t-[45px] h-full lg:px-[64px] md:px-[32px] px-[16px] pt-8 lg:pb-8 flex flex-col space-y-8 
            lg:flex-row space-x-0  lg:space-x-[150px] xl:space-x-[135px] 2xl:space-x-[460px]">
           <div className="w-full  md:w-[25%] flex flex-col space-y-6 sm:space-y-8 " >
                <div className="">
                    <img src="/images/logo.png" alt="Logo" className="w-[10rem] sm:w-[15rem] sm:h-[4rem]   " />
                </div>
               <div className="flex flex-col space-y-4">
               <div className="flex items-center space-x-6 sm:space-x-8">
                    <span className="" >
                         <FaPhoneAlt className="text-[#FF6E40] text-2xl sm:text-3xl md:text-4xl " />
                    </span>
                    <span className="text-lg sm:text-2xl font-semibold  text-[#0c2543]">
                    9486115199
                    </span>
                </div>
                <div className="flex items-center space-x-4">
    <img className="w-8 h-8 sm:w-10 sm:h-10" src="/images/gmail.png" alt="Gmail" />
    <span className="text-lg sm:text-2xl font-semibold text-[#0c2543]">edustein.in@gmail.com</span>
</div>

                </div> 
                <div className="">
                <button  className="  border-2 border-line hover:text-line hover:bg-white h-10 w-36 sm:h-12  bg-line text-white font-bold rounded-lg sm:w-44 text-base sm:text-2xl ">
                        Contact
                    </button>
                </div>
               
            </div>
            <div className="flex flex-col    items-start 
            lg:items-center w-full   ">
                <div className=" self-start flex items-center lg:h-[85%]  ">
                    <span className="font-redhat text-[44544A] font-semibold md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet consectetur. Ut cursus ullamcorper fermentum vestibulum tellus tristique senectus. Leo mauris morbi maecenas morbi at quis morbi. Pretium ultricies tortor vulputate </span>
                </div>
                <div className="self-end flex space-x-6 sm:space-x-12 justify-start  lg:justify-end items-center md:items-end h-24 w-full ">
  <div>
    <img className="w-8 h-8 sm:w-12 sm:h-12" src="/images/linkedin.png" alt="LinkedIn" />
  </div>
  <div>
    <img className="w-8 h-8 sm:w-12 sm:h-12" src="/images/instagram.png" alt="Instagram" />
  </div>
  <div>
    <img className="w-8 h-8 sm:w-12 sm:h-12" src="/images/twitter.png" alt="Twitter" />
  </div>
</div>

            </div>
           </div>
        </div>

      </div>
    );
}



export default Contact;
