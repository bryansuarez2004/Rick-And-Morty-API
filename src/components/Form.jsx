import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationThunk } from "../store/slices/location.slice";
import axios from "axios";
import Suggestion from "./UI/Suggestion";

const Form = () => {
  const { messageError, inputPlaceHolder, toggleToChangeMode } = useSelector(
    (store) => store.modeOfSearch
  );
  const dispatch = useDispatch();
  const [thereIsAnError, setThereIsAnError] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const idForDimension = parseInt(e.target.idValue.value);
    console.log(idForDimension);
    if (idForDimension > 0 && idForDimension < 127) {
      setThereIsAnError(false);
      dispatch(getLocationThunk(idForDimension));
    } else {
      setThereIsAnError(true);
    }
  };

  const handleGetLocationSuggestions = (e) => {
    if (toggleToChangeMode) {
      if(e.target.value){
        const location = e.target.value;
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${location}`)
        .then(({data})=>{setLocationSuggestions(data.results)
        setThereIsAnError(false)})
        .catch((err)=>{console.log(err)
          setLocationSuggestions([])
          setThereIsAnError(true)       
        });
      }else{
        setLocationSuggestions([])
        setThereIsAnError(false)
      }
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit}
          className=" flex  flex-col items-center relative"
        >
          <div className="flex items-center relative w-[280px]">
            <input
              onChange={handleGetLocationSuggestions}
              autoComplete="off"
              name="idValue"
              className=" rounded-2xl border-[3px] border-secondary px-4 h-[40px] outline-none"
              type="text"
              placeholder={inputPlaceHolder}
            />
            <button className=" absolute rounded-2xl border-[3px] border-secondary right-[10px] p-1 px-3 bg-main">
              SEARCH
            </button>
          </div>

          {toggleToChangeMode && (
            <div className={`${locationSuggestions.length > 0 ?'border-4':'' } absolute left-0 bottom-[-4px] translate-y-full bg-main w-[96%] z-50    border-main max-h-[250px] overflow-y-auto scrollbar`}>
              {
                locationSuggestions.map((location)=>{
                   return <Suggestion key={location.id} location={location}  setLocationSuggestions={setLocationSuggestions} setThereIsAnError={setThereIsAnError}/>
                })
              }
            </div>
          )}
        </form>
        {thereIsAnError && (
          <span className="font-medium text-[17px] text-error ">
            {messageError}
          </span>
        )}
      </div>
    </>
  );
};

export default Form;
