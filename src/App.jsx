import { useState } from 'react'
import reactLogo from './assets/react.svg'
/* import viteLogo from '/vite.svg' */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar style={{backgroundColor:'pink', fontStyle:'italic',fontWeight:'bold',fontSize:'20px',color:'green',padding:'10px' }}>
      <Container fluid>
        <Navbar.Brand href="#">FlowersLove</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5 my-lg-2 py-1  justify-content-end flex-grow-1 pe-5"
            style={{ maxHeight: '100px'} }
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">Details</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#action2">MyPage</Nav.Link>
          </Nav>
          
            <Button variant="outline-success">Search</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <main>
    <Container className="flowers">
      <Row className="px-5 my-5">
        <Col sm={8}>  <Image src="picture5.jpg" fluid rounded/></Col>
        <Col sm={3}><Image src="picture3.webp" fluid  /></Col>
      </Row>
      <Row>

      <Card className="text-center  my- py-4">
      <Card.Body style={{backgroundColor:'pink',color:'green', fontWeight:'bold',fontSize:'20px', border:'none'}}>“Flowers always make people better, happier, and more helpful; they are sunshine, food and medicine to the mind." “Every flower is a soul blossoming in nature.”</Card.Body>
    </Card>


      </Row>

      <Row className="px-5 my-5">
      <Col>
      <Card style={{ width: '18rem', textAlign:'Center',border:'2px solid pink',cursor:'pointer', }}>
      <Card.Img variant="top" src="flo2.webp" />
      <Card.Body>
        <Card.Title style={{color:'Red',}}>Red Tulips</Card.Title>
        <Card.Text style={{color:'blueviolet',fontStyle:'italic'}}>
        “In love, treat your relationship as if you are growing the most beautiful flower.  and always make sure the petals are full of colour and are never curling.”
        </Card.Text>
        <Button style={{backgroundColor:'purple'}}>GrabeMe</Button>
      </Card.Body>
    </Card>
      
      
      </Col>

      <Col>
      <Card style={{ width: '18rem',textAlign:'Center', border:'2px solid pink' }}>
      <Card.Img variant="top" src="flo3.webp" />
      <Card.Body>
        <Card.Title style={{color:'Red',}}>Card Title</Card.Title>
        <Card.Text style={{color:'blueviolet',fontStyle:'italic'}}>
        “In love, treat your relationship as if you are growing the most beautiful flower.  and always make sure the petals are full of colour and are never curling.”
        </Card.Text>
        <Button style={{backgroundColor:'purple'}}>GrabMe</Button>
      </Card.Body>
    </Card>
      
      
      </Col>

      <Col>
      <Card style={{ width: '18rem', textAlign:'Center', border:'2px solid pink' }}>
      <Card.Img variant="top" src="flo.webp" />
      <Card.Body>
        <Card.Title style={{color:'Red',}}>Card Title</Card.Title>
        <Card.Text style={{color:'blueviolet',fontStyle:'italic'}}>
        “In love, treat your relationship as if you are growing the most beautiful flower.  and always make sure the petals are full of colour and are never curling.”
        </Card.Text>
        <Button style={{backgroundColor:'purple'}}>Grabe me</Button>
      </Card.Body>
    </Card>
      
      
      </Col>
      
      </Row>
      <Row className="px-5 my-5">

      <Col>
      <Card style={{ width: '18rem', textAlign:'Center' , border:'2px solid pink'}}>
      <Card.Img variant="top" src="1(1).jpg" />
      <Card.Body>
        <Card.Title style={{color:'Red',}}>Card Title</Card.Title>
        <Card.Text style={{color:'blueviolet',fontStyle:'italic'}}>
        “In love, treat your relationship as if you are growing the most beautiful flower.  and always make sure the petals are full of colour and are never curling.”
        </Card.Text>
        <Button style={{backgroundColor:'purple'}}>GrabMe</Button>
      </Card.Body>
    </Card>
      
      
      </Col>

      <Col>
      <Card style={{ width: '18rem', textAlign:'Center', border:'2px solid pink' }}>
      <Card.Img variant="top" src="flo5.webp" />
      <Card.Body>
        <Card.Title style={{color:'Red',}}>Card Title</Card.Title>
        <Card.Text style={{color:'blueviolet',fontStyle:'italic'}}>
        “In love, treat your relationship as if you are growing the most beautiful flower.  and always make sure the petals are full of colour and are never curling.”
        </Card.Text>
        <Button style={{backgroundColor:'purple'}}>GrabMe</Button>
      </Card.Body>
    </Card>
      
      
      </Col>
        


      <Col>
      <Card style={{ width: '18rem', textAlign:'Center', border:'2px solid pink' }}>
      <Card.Img variant="top" src="flo4.webp" />
      <Card.Body>
        <Card.Title style={{color:'Red',}}>Card Title</Card.Title>
        <Card.Text style={{color:'blueviolet', fontStyle:'italic'}}>
        “In love, treat your relationship as if you are growing the most beautiful flower.  and always make sure the petals are full of colour and are never curling.”
        </Card.Text>
        <Button style={{backgroundColor:'purple'}}>GrabMe</Button>
      </Card.Body>
    </Card>
      
      
      </Col>
        
        
        
        </Row>
        </Container>

    </main>

    
    <app/>
    <footer class="py-4 my-5 bg-dark ">

      <Container class="px-4">
        <p class="text-center text-white">
          <pre>copyright  & copy; Aruna @ 2025</pre>
        </p>

      </Container>
    </footer>
    
    
    
    </>
  
      
    
  )
}

export default App;
