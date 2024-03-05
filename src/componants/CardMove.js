import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const CardMove = ({move}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/move/${move.id}`}>
          <div className="card">
        {
          move.poster_path ?
          (<img src={`https://image.tmdb.org/t/p/w500`+ move.poster_path} className="card__image" alt="hu" />)
          :null
        }
            
            <div className="card__overlay">
              <div className="overlay__text text-center w-100 p-2">
                <p>اسم الفيلم : {move.title}</p>
                <p>تاريخ الاصدار: {move.release_date}</p>
                <p>عدد المقيمين: {move.vote_count}</p>
                <p>التقييم: {move.vote_average}</p>
              </div>
            </div>
          </div>
        </Link>
    </Col >
  )
}

export default CardMove
