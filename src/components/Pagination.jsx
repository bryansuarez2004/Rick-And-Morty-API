import React from 'react'
import PageNumber from './UI/PageNumber'

const Pagination = ({arrayOfPages,setCurrentPage,currentPage}) => {
  return (
   <div className=' py-10 flex flex-wrap justify-center gap-5'>
    {
        arrayOfPages.map((page)=>{
            return <PageNumber  currentPage={currentPage} setCurrentPage={setCurrentPage} key={page} page={page}/>
        })
    }

   </div>
  )
}

export default Pagination