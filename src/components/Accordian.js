import React, { useState } from "react";

const AccordionItem = ({ title, children, index, activeIndex, onToggle }) => {
  return (
    <div className=" border border-[#06426B] mb-[10px]">
      <button
        onClick={() => onToggle(index)}
        className="relative w-[100%] px-[25px] pr-[30px] py-[15px] inline-flex justify-start text-[#09aff4] text-[15px] text-[1rem] font-[600] uppercase text-left"
      >
        <span>{title}</span>
        <span className={`absolute right-[15px] text-[20px] top-[11px] transition-transform ${ activeIndex === index ? "transform rotate-180" : ""
          }`}>
          +
        </span>
      </button>
      {activeIndex === index && (
        <div className="px-[25px] py-[25px] pt-[5px] text-[#fff] bg-transparent">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className="w-[100%]">
      <div className="bg-transparent">
        <AccordionItem
          title="Are Your Service Easy To Use?"
          index={0}
          activeIndex={activeIndex}
          onToggle={toggleAccordion}
          className="dots relative px-[10px] inline-flex mt-[30px] mb-[5px] text-[#09aff4] text-[15px] text-[1rem] font-[600] uppercase text-center justify-center"
        >
          <p>mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.</p>
        </AccordionItem>
        <AccordionItem
          title="Will I Receive Future Updates?"
          index={1}
          activeIndex={activeIndex}
          onToggle={toggleAccordion}
        >
          <p>mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.</p>
        </AccordionItem>
        <AccordionItem
          title="Is This Services Work In My Country?"
          index={2}
          activeIndex={activeIndex}
          onToggle={toggleAccordion}
        >
          <p>mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.</p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default Accordion;
