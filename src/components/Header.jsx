import React from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { FaExchangeAlt } from "react-icons/fa";
import { changeMode } from "../store/slices/modeOfSearch.slice";

const Header = () => {
  const dispatch = useDispatch();
  const locationInfo = useSelector((store) => store.location.data);
  const population = useSelector((store) => store.location.population);
  const {mode} =useSelector((store)=> store.modeOfSearch)

  const handleChangeModeOfSearch = () => {
    dispatch(changeMode());
  };


  return (
    <>
      <div className=" flex flex-col items-center p-9 gap-7 ">
        <img className="w-[80%] sm:w-[50%] lg:w-[25%]" src="/title.png" alt="" />

        <div className="grid place-items-center gap-5">
          <h2 className="uppercase text-[15px] font-bold text-secondary bg-main p-1 rounded-full border-[3px]">{mode}</h2>
        <div className="flex gap-1 items-center">
          <Form />
          <div
            onClick={handleChangeModeOfSearch}
            className="p-3 bg-main rounded-full border-[3px] cursor-pointer  border-secondary text-secondary hover:bg-secondary hover:border-main hover:text-main w-min"
          >
            <FaExchangeAlt className="text-xl" />
          </div>
        </div>
        </div>
        <div className="bg-main w-[70%] p-5 rounded-2xl flex flex-col items-center gap-5 border-secondary border-[3px]">
          <div className="text-secondary font-bold uppercase">WELCOME TO {locationInfo?.name}</div>
          <div className="flex flex-col sm:flex-row justify-around w-full">
            <div className="text-secondary font-bold">TYPE: <span className="text-black">{locationInfo?.type}</span></div>
            <div className="text-secondary font-bold">DIMENSION: <span className="text-black">{locationInfo?.dimension}</span></div>
            <div className="text-secondary font-bold">POPULATION: <span className="text-black">{population}</span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
