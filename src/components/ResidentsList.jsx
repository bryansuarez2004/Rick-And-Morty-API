import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResidentCard from "./ResidentCard";
import { pagination } from "../utils/pagination";
import Pagination from "./Pagination";

const ResidentsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const residentsUrls = useSelector((store) => store.residents.residentsUrls);
  const { arrayOfPages, residentsToShowPerPage } = pagination(
    currentPage,
    residentsUrls
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [residentsUrls]);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10 p-5">
        {residentsToShowPerPage.map((url) => {
          return <ResidentCard key={url} url={url} />;
        })}
        
      </div>
      {residentsToShowPerPage.length === 0 && <div className="flex flex-col items-center relative">
        <img className="w-[70%] max-w-[400px]" src="/noresidents.png" alt="" />
           <h2 className=" text-4xl sm:text-6xl uppercase font-bold text-black">No Residents</h2>
         </div>}
      <Pagination
        arrayOfPages={arrayOfPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};
//? falta parte del renderizado condicional en caso de que no haya residentes
export default ResidentsList;
