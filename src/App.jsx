import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { GetAndSetPopulation, getLocationThunk, setLocation } from "./store/slices/location.slice";
import { getRandomIdLocation } from "./utils/getRandomIdLocation";
import ResidentsList from "./components/ResidentsList";
import axios from "axios";
import { setResidents } from "./store/slices/residents.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const number = getRandomIdLocation();
    console.log('ejecutando');
    const idSessionStorage = sessionStorage.getItem('idResident')
    if(idSessionStorage){
         axios.get(`${idSessionStorage}`)
         .then(({data})=>{
          
          dispatch(setLocation(data))
          dispatch(GetAndSetPopulation(data.residents))
          dispatch(setResidents(data.residents))
         })
         .catch((err)=>console.log(err))
    }else{

      dispatch(getLocationThunk(number));
    }
  }, []);

  return (
    <>
      <main className="min-h-[1000px] relative bg-black z-10 bgMain ">
        <Header />
        <ResidentsList />
      </main>
    </>
  );
}

export default App;
