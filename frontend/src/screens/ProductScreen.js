import React,{ useState,useEffect} from 'react'
import { Link,useParams,useNavigate,useLocation } from 'react-router-dom';
import { Row,Col,Image,ListGroup,Card,Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import { useDispatch,useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions'; 
import Loader from '../components/Loader';
import Message from '../components/Message';







const ProductScreen = (props) => {
  
  const [qty,setQty] = useState(0);


  const dispatch = useDispatch();
  const { id } = useParams();
  let navigate = useNavigate();
  

  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {

    dispatch(listProductDetails(id));
  },[dispatch,id])

  
  

  const addToCartHandler = () => {
    navigate(`/cart/${id}/qty/${qty}`);
  }





  return (
    <div>
       <Link to='/' className='btn btn-light my-3'>Go Back</Link>

        {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> :


       <Row>
          <Col md={6}>
            <Image src={product.image}  fluid/>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={ `${product.numReviews} reviews`}/>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Price: ${product.price}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className='text-capitalize'>Description: ${product.description}</p>
              </ListGroup.Item>
            </ListGroup>
            
          </Col>
          <Col md={3}>
            <Card >
            <ListGroup variant='flush'>
              
              
              
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h6>Price:</h6>
                  </Col>

                  <Col >
                    <h6>${product.price}</h6>
                  </Col>
                </Row>
              </ListGroup.Item>

            



              <ListGroup.Item>
                <Row>
                  <Col>
                    <h6>Status:</h6>
                  </Col>

                  <Col >
                    <h6>{product.countInStock>0 ? 'In Stock' : 'Out of Stock'}</h6>
                  </Col>
                </Row>
              </ListGroup.Item>

              {
              product.countInStock>0 ? 
              <ListGroup.Item>
                <Row>
                 <Col className='align-middle'>
                    <h6 className='align-middle'>Quantity:</h6>
                  </Col>
                  <Col>
                    <Form.Control  as='select' value={qty} onChange={(e)=>{
                      setQty(e.target.value)
                    }}>


                      {[...Array(product.countInStock).keys()].map(x=>(

                        <option key={x+1} value={x+1}>{x+1}</option>
                      ))}

                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item> : null
                
              }

              <ListGroup.Item>
                <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.countInStock <= 0 }>Add To Cart</Button>
              </ListGroup.Item>



            </ListGroup>
            </Card>
          </Col>
       </Row>
    }
    </div>
  )
}

export default ProductScreen