import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../images/5930234.png'
const NavBar = ({search}) => {

  const onSearch=(val)=>{
    search(val)
  }
  return (
    <div className="nav-style w-100">
    <Container>
      <Row className="pt-2 ">
        <Col xs="2" lg="1">
          <a href="/">
            <img className="logo" src={logo}  alt="logo" />
          </a>
        </Col>
        <Col xs="10" lg="11" className=" d-flex align-items-center">
          <div className="search  w-100">
            <i className="fa fa-search"></i>
            <input onChange={(e) => onSearch(e.target.value)} type="text" className="form-control" placeholder="ابحث" />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default NavBar
