import React from "react";

interface Dict{
  url:string;
  title:string;
  description:string;
}
const Carousel1:React.FC<Dict> = ({url,title,description})=> {
  return (
    <div>
      <div
        className="
        bg-lightgreen
        md:text-left
        text-center
        items-center
        flex flex-col
        md:flex-row
        justify-center
      "
      >
        <div className="">
          <img
            className="h-60"
            src={url}
          />
        </div>
        <div className="md:w-3/12 mt-20 mb-20">
          <div className="text-2xl mb-10 font-semibold">
            {title}
          </div>
          <div className="text-lg">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel1;
