import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header'
import Categories from '../Shared/LeftSideNav/Categories/Categories'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'

const Main = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col md='3' >
                  <Categories/>
                </Col>
                <Col md='6'>
                    <Outlet/>
                </Col>
                <Col md= '3' >
                  <RightSideNav/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Main