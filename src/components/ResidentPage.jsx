import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";

const ResidentPage = () => {
  const { id } = useParams();
  const [resident, setResident] = useState({}); //el residente es un objeto con propiedades

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setResident(data);
        sessionStorage.setItem("idResident", `${data.location.url}`);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-[url('/backgrounds/header.webp')]">
      <div className="bg-main relative p-6 border-4 border-secondary rounded-xl">
        <div className="border-4 border-secondary rounded-xl overflow-hidden ">
          <img className="w-full" src={resident.image} alt="" />
        </div>
        <div className="p-3 flex items-center justify-between">
          <div>
            <h2 className="text-center uppercase mb-2 font-bold  text-xl w-min mx-auto"> {resident.name}</h2>
            <p>especie: {resident.species}</p>
            <p>status: {resident.status}</p>
            <p>gender: {resident.gender}</p>
            <p>location: {resident.location?.name}</p>
          </div>

          <p className="flex flex-col items-center bg-cardSecondary p-2 rounded-lg border-2 border-cardPrimary">episodes <br />appear: <br /><span className="text-3xl font-bold">{resident.episode?.length}</span></p>
        </div>
        <Link to={`/`} className="p-3 bg-cardSecondary rounded-full text-3xl border-4 border-cardPrimary absolute top-[10px] right-[10px] hover:bg-main transition-all duration-500 hover:border-secondary"><IoMdReturnLeft /></Link>
      </div>
     
    </div>
  );
};

export default ResidentPage;
