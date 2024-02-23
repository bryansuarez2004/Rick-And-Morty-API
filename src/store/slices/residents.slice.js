import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const residents = createSlice({
  name: "residents",
  initialState: {
    residentsUrls:[],

  },
  reducers: {
    setResidents:(state,action)=>{
            state.residentsUrls = action.payload
    }
    
  },
});
export const {setResidents } = residents.actions;

export default  residents.reducer