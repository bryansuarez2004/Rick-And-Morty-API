import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ResidentCard = ({url}) => {
    const [resident, setResident] = useState({}) //el residente es un objeto con propiedades


  useEffect(()=>{
   axios.get(`${url}`)
   .then(({data})=> setResident(data))
   .catch((err)=>console.log(err))
  },[])

  return (
    <div className='flex flex-col items-center  '>
        <Link to={`/${resident.id}`} className='w-[150px] rounded-full overflow-hidden border-4 relative z-30 border-secondary hover:border-main transition-all duration-500 '>
        <img className='hover:scale-[1.2] transition-all duration-500 cursor-pointer' src={resident.image} alt="" />
            
        </Link>
        <div className='  rounded-2xl  relative top-[-35px] z-20 border-8 border-secondary w-[100%] bg-cardPrimary'>
            <h2 className=' px-1 pb-1 pt-9 text-lg font-bold text-center bg-main rounded-t-lg line-clamp-1'>{resident.name}</h2>
           <div className='p-5  px-7 relative z-10 clip flex flex-col justify-center gap-2 min-h-[160px]'>
           <p className='text-secondary font-bold'>SPECIES : <span className='text-white font-[2px] tracking-widest'>{resident.species}</span></p>
            <p className='text-secondary font-bold'>ORIGIN <span className='text-white font-[2px] tracking-widest'>{resident.origin?.name}</span></p>
            <p className='text-secondary font-bold uppercase'>gender: <span className='text-white font-[2px] tracking-widest lowercase' >{resident.gender}</span></p>
           </div>
        </div>
    </div>
  )
}

export default ResidentCard