import React,{ useEffect } from 'react'

import { Col, Row } from 'react-bootstrap';

import Product from '../components/Product';

import { useDispatch,useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions.js';

import Message from '../components/Message';
import Loader from '../components/Loader';





const HomeScreen = () => {

  const dispatch = useDispatch();
  
  const productsList = useSelector(state => state.productList);
  const { products, loading, error } = productsList;

  useEffect(() => {
    

    dispatch(listProducts());
  },[dispatch]);



  return (
    <>
        <h1>Welcome to Shoptronics</h1>
        {
        
        loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> : 
        
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="p-2">
                    <Product product={product} />
                </Col>
            ))}
        </Row>
        
        
        }
        
    </>
  )
}

export default HomeScreen