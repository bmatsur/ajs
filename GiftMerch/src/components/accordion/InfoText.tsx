import React from 'react'

type InofoTextProps = {
    title: string;
    content: string;
    content2?: string;
  };

const InfoText = (props : InofoTextProps) => {
  return (
    <div>
        <div className="p-4 bg-gray-200 rounded-lg mb-4 max-w-4xl mx-auto">
      <button
        className="flex justify-between w-full items-center text-base md:text-lg lg:text-xl"
      >
        <span className="truncate">{props.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`transform transition-transform duration-400 ease-out`}
        >
          <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"></path>
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="text-gray-700 text-sm md:text-base mt-2">{props.content}</div>
      </div>
    </div>
    </div>
  )
}

export default InfoText
