import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setResidents } from "./residents.slice";

const location = createSlice({
  name: "location",
  initialState: {
    data:null,
    population:null
  },
  reducers: {
    setLocation: (state, action) => {
      state.data = action.payload;
    },
    GetAndSetPopulation:(state,action) =>{ 
       const population = action.payload.length 
      state.population = population
    }
  },
});

export const { setLocation,GetAndSetPopulation } = location.actions;
export default location.reducer;

export const getLocationThunk = (number) => (dispatch) => {
  axios
    .get(`https://rickandmortyapi.com/api/location/${number}`)
    .then(({ data }) => {
      console.log(data);
      dispatch(setLocation(data));
      dispatch(GetAndSetPopulation(data.residents))
      dispatch(setResidents(data.residents))
    })
    .catch((err) => console.log(err));
};
