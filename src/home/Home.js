import React from "react";
import './Home.scss'; 
import {Carousel} from 'react-bootstrap';
import slider1 from './background.jpg'
import slider2 from './book.jpg'
import slider3 from './bird.jpg'

function Home() {
  return (
    <Carousel> 
    <Carousel.Item>
<img
className="d-block "
src={slider1}
alt="First slide"
width="1285px"
height="470px"
/>
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block "
src={slider2}
alt="Third slide"
width="1285px"
height="470px"
/>
<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block "
src={slider3}
width="1285px"
height="470px"
alt="Third slide"
/>
<Carousel.Caption>
<h3>Third slide label</h3>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item>
    </Carousel>
    
  );
}

export default Home;