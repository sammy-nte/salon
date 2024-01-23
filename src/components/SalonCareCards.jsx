function SalonCareCards({text, svg}) {
  return (
    <div className="w-[50%] h-[130px] shadow-md bg-borderColor rounded-2xl flex flex-col justify-evenly items-center sm:w-[240px]">
        {svg}
      <p className="text-tColor font-medium capitalize font-[Anton]">{text}</p>
    </div>
  );
}

export default SalonCareCards;
