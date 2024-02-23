import { configureStore } from "@reduxjs/toolkit";
import locationSlice from "./slices/location.slice";
import residentsSlice from "./slices/residents.slice";
import modeOfSearchSlice from "./slices/modeOfSearch.slice";

export default configureStore({
    reducer:{
      location:locationSlice,
      residents:residentsSlice,
      modeOfSearch:modeOfSearchSlice
    }
})