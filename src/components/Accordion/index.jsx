function Accordion({ openIndex, item, index, toggle }) {
  return (
    <div
      key={index}
      className="rounded-xl bg-bgAccordion text-white transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={() => toggle(index)}
        className="w-full flex items-center justify-start gap-2 px-6 py-4"
      >
        <span
          className={`
                        transition-all duration-300 relative
                        ${openIndex === index ? 'rotate-90' : 'rotate-0'}
                        w-4 h-4 flex items-center justify-center
                      `}
        >
          <span className="absolute w-0.5 h-3 bg-gray transition-all duration-300"></span>
          <span
            className={`absolute w-3 h-0.5 bg-gray transition-all duration-300 ${
              openIndex === index ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
        </span>

        <span className="text-sm md:text-base font-medium break-words text-right flex-1">
          {item.question}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-12 pb-4 text-sm text-gray-300 break-words">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
