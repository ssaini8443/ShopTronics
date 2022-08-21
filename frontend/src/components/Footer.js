import React from 'react'
import { Container,Row,Col } from "react-bootstrap";


const Footer = () => {
  return (
    <Container>
        <footer>
            <Row>
                <Col className='text-center'>
                    <p>&copy; 2020 - <a href="https://www.linkedin.com/in/jose-antonio-gonzalez-alvarez-a8a8a8a8/">Jose Antonio Gonzalez Alvarez</a></p>
                </Col>
            </Row>
        </footer>
    </Container>
    
  )
}

export default Footer