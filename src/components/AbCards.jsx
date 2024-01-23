import React from "react";

function AbCards({heading, text, imgSrc, bgColor}) {
    const style = {
        backgroundColor: bgColor === 'bg-borderColor' ?  'rgba(221,212,232,1)' : 'rgba(255,246,241,1)'
    }
  return (
    <section style={style} className=" w-[90%] rounded-2xl max-w-[1000px] mt-14 mx-auto bg-borderColor p-3 sm:flex sm:items-center">
      <div className="text-center p-3 text-tColor">
        <h5 className="capitalize text-xl font-[Anton]">{heading}</h5>
        <p>
          {text}
        </p>
      </div>
      <img
        src={imgSrc}
        alt=""
        className="w-[300px] mx-auto rounded-lg sm:object-cover lg:w-[400px]"
      />
    </section>
  );
}

export default AbCards;
