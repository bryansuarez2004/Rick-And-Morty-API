import React from "react";
import { useDispatch } from "react-redux";
import { getLocationThunk } from "../../store/slices/location.slice";

const Suggestion = ({
  location,
  setLocationSuggestions,
  setThereIsAnError,
}) => {
  const dispatch = useDispatch();

  const handleSearchLocation = (idLocation) => {
    console.log(idLocation);
    dispatch(getLocationThunk(idLocation));
    setLocationSuggestions([]);
    setThereIsAnError(false);
  };

  return (
    <div
      onClick={() => handleSearchLocation(location.id)}
      className="p-2 bg-secondary text-main hover:bg-main hover:text-secondary cursor-pointer "
    >
      {location.name}
    </div>
  );
};

export default Suggestion;
