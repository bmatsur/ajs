// import React, {useState} from 'react'

// type AccordionProps = {
//   title: string;
//   content: JSX.Element;
// }

// const Accordion = (props: AccordionProps) => {

//   const [accordionOpen, setAccordionOpen] = useState(false);

//   return (
//     <div className='p-2 bg-gray-200 rounded-lg mb-2'>
//       <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
//         <span>{props.title}</span>
//         {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}

//         <svg xmlns="http://www.w3.org/2000/svg" 
//         width="24" 
//         height="24" 
//         viewBox="0 0 24 24" 
//         className={` fill: rgba(0, 0, 0, 1);
//                     transform: ;
//                     msFilter:;
//                     transition
//                     duration-400
//                     ease-out
//                     ${accordionOpen ? "rotate-0" : "rotate-180"}
//                     `}>
//           <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
//         </svg>

        
//       </button>
//       <div>
//         <div className={`grid 
//                         overflow-hidden 
//                         transition-all 
//                         duration-300 
//                         ease-in-out 
//                         text-slate-600 
//                         text-sm
//                         ${accordionOpen 
//                           ? 'grid-rows-[1fr] opacity-100' 
//                           : 'grid-rows-[0fr] opacity-0'}`}>
//           <div className='overflow-hidden'>{props.content}</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Accordion

import { useState } from 'react';

type AccordionProps = {
  title: string;
  content: JSX.Element;
};

const Accordion = (props: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-4  rounded-lg mb-4 max-w-4xl mx-auto">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center text-base md:text-lg lg:text-xl"
      >
        <span className="truncate font-bold text-2xl">{props.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`transform transition-transform duration-400 ease-out ${
            accordionOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-700 text-sm md:text-base mt-2">{props.content}</div>
      </div>
    </div>
  );
};

export default Accordion;