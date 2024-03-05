import React from 'react'
import ReactPaginate from 'react-paginate'

const PaginationComp = ({count,getAllMovies}) => {
  
  const handlePageClick=(data)=>{
    getAllMovies(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&page=${data.selected+1}&sort_by=popularity.desc`)
  }
  return (
   <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={count > 500 ? 500:count}
        previousLabel="< السابق"
        containerClassName='pagination justify-content-center p-3'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        nextClassName='page-item'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active'

      />
   </div>
  )
}

export default PaginationComp
