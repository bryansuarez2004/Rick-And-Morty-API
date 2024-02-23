import React from 'react'

const PageNumber = ({page,setCurrentPage,currentPage}) => {

  const handlePage = (newPage)=>{
    setCurrentPage(newPage)
  }

  return (
    <div onClick={()=>handlePage(page)} className={`${currentPage === page ? 'bg-secondary border-main text-main' : 'bg-main text-secondary border-secondary'} aspect-square rounded-full  w-12 flex items-center justify-center border-4  hover:bg-secondary hover:border-main font-bold text-lg  hover:text-main cursor-pointer `}>{page} </div>
  )
}

export default PageNumber