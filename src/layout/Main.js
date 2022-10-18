import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg='2'>
                left
                </Col>
                <Col lg='7'>
                    <Outlet/>
                middle
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