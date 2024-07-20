

import { format } from 'date-fns';
import { FaArrowRight } from "react-icons/fa6";

const ActiveBootcamps = () => {
  const activeCamps = [
    {
      src: "sample.webp",
      title: "Become a Fullstack  web developer",
      start_date: "Wed Jul 10 2024 22:23:00 GMT+0530 (India Standard Time)",
      about: `Are you thinking about becoming a Web Developer?
      We’ll show you how in this LIVE online info session! 
      Curious about what web development really entails?
      Wondering whether this path could be for you?
      Interested in CareerFoundry's Full-Stack Web Development Program?`
    }, {
        src: "sample.webp",
        title: "Become a Fullstack  web developer",
        start_date: "Wed Jul 10 2024 22:23:00 GMT+0530 (India Standard Time)",
        about: `Are you thinking about becoming a Web Developer?
        We’ll show you how in this LIVE online info session! 
        Curious about what web development really entails?
        Wondering whether this path could be for you?
        Interested in CareerFoundry's Full-Stack Web Development Program?`
      }, {
        src: "sample.webp",
        title: "Become a Fullstack  web developer",
        start_date: "Wed Jul 10 2024 22:23:00 GMT+0530 (India Standard Time)",
        about: `Are you thinking about becoming a Web Developer?
        We’ll show you how in this LIVE online info session! 
        Curious about what web development really entails?
        Wondering whether this path could be for you?
        Interested in CareerFoundry's Full-Stack Web Development Program?`
      }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "MMMM dd, yyyy, hh:mm a");
  };

  return (
    <div className='pt-28 sm:pt-34 bg-gray-300 min-h-screen h-full w-full px-8 sm:px-16'>
      <div className='flex flex-wrap  gap-8'>
        {activeCamps.map((camp, index) => (
        
         <div class="max-w-sm rounded overflow-hidden bg-white shadow-lg font-redhat">
      <img class="w-full" src={'/images/'+camp.src} alt="Mountain"/>
     <div> 
        <p className='px-6 pt-2 text-gray-700'>{formatDate(camp.start_date)}</p>
     </div>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{camp.title}</div>
       
      </div>
      <div class="px-6 pt-2 pb-2">
        <button class="inline-block border-2 border-line hover:bg-white hover:text-line bg-line rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2  flex space-x-1 items-center"><span>Register</span><FaArrowRight />
        </button>
  
      </div>
    </div>
      
       

        ))}
      </div>
    </div>
  );
};

export default ActiveBootcamps;
