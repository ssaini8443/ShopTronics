import React,{useEffect, useState} from 'react'

import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    }

    fetchProducts();
  },[])



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