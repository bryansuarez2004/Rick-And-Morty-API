function pagination (currentPage, residents) {
    //esta funcion necesita todos los residentes que se vayan a mostrar y la pagina actual para mostrar de dicha pagina los residentes que le tocan


   const  RESIDENTS_PER_PAGE = 8
   
   const sliceEnd = currentPage * RESIDENTS_PER_PAGE
   const sliceStart = sliceEnd - RESIDENTS_PER_PAGE

   const residentsToShowPerPage = residents.slice(sliceStart,sliceEnd)
   
    const pages = Math.ceil(residents.length/RESIDENTS_PER_PAGE)
    const arrayOfPages = []

   for (let i = 1; i <= pages; i++) {
      arrayOfPages.push(i)
    
   }

   return {residentsToShowPerPage,arrayOfPages}

}

export {pagination}