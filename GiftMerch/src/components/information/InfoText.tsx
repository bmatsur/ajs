
type InofoTextProps = {
    title: string;
    content: string;
    content2?: string;
  };

const InfoText = (props : InofoTextProps) => {
  return (
    <div>
        <div className="p-4  rounded-lg mb-4 max-w-4xl mx-auto">
      <div
        className="flex justify-between w-full items-center text-base md:text-lg lg:text-xl"
      >
        <span className="truncate font-bold text-2xl">{props.title}</span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="text-gray-700 text-sm md:text-base mt-2">{props.content}</div>
        <div className="text-gray-700 text-sm md:text-base mt-2">{props.content2}</div>
      </div>
    </div>
    </div>
  )
}

export default InfoText
