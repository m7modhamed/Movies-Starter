import React from 'react'
import { Row } from 'react-bootstrap'
import CardMove from './CardMove'
import PaginationComp from './PaginationComp'

const MoviesList = ({getAllMovies,movies,count}) => {
  return (
    <Row className='mt-3'>
      {
        movies.length ? (movies.map( (move)=>{
          return (<CardMove key={move.id}  move={move} />)
        })):<h1 className='text-center p-5'>لا يوجد افلام للعرض</h1>
      }
      {
        movies.length ?(
          <PaginationComp count={count} getAllMovies={getAllMovies}/>
        ):null
      }
    </Row>
  )
}

export default MoviesList
