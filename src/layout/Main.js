import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from '../Shared/Header/Header'
import Categories from '../Shared/LeftSideNav/Categories/Categories'

const Main = () => {
  return (
    <div>
      <Header></Header>
        <Container>
            <Row>
                <Col lg='3'>
                  <Categories/>
                </Col>
                <Col lg='6'>
                    <Outlet/>
                </Col>
                <Col lg= '3'>
                right
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Main