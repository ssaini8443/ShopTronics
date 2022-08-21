import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
        <h1>Welcome to Shoptronics</h1>
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3} className="p-2">
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen