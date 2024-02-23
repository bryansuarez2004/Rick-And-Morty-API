import { createSlice } from "@reduxjs/toolkit";

const modeOfSearch = createSlice({
  name: "modeOfSearch",
  initialState: {
    toggleToChangeMode: false,
    mode: "buscar por ID",
    messageError: "debe ser un numero del 1 al 126",
    inputPlaceHolder: "ID ..."
  },
  reducers: {
    changeMode: (state) => {
        state.toggleToChangeMode = !state.toggleToChangeMode
      if (!state.toggleToChangeMode) {
        state.mode = "buscar por ID";
        state.messageError = "debe ser un numero del 1 al 126";
        state.inputPlaceHolder = "ID ...";
      } else {
        state.mode = "buscar por nombre de dimension";
        state.messageError = "el nombre de la dimension debe ser correcto";
        state.inputPlaceHolder = "Dimension ...";

      }
    },
  },
});


export const {changeMode} = modeOfSearch.actions
export default modeOfSearch.reducer;
