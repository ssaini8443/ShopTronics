import React,{ useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom';
import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import axios from 'axios';

const ProductScreen = (props) => {
  
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get(`/api/products/${id}`);
      setProduct(result.data);
    }

    fetchProducts();
  },[id])

  
  
  return (
    <div>
       <Link to='/' className='btn btn-light my-3'>Go Back</Link>
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



              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.countInStock <= 0 }>Add To Cart</Button>
              </ListGroup.Item>



            </ListGroup>
            </Card>
          </Col>
       </Row>
    </div>
  )
}

export default ProductScreen