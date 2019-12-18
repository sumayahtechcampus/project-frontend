import React from "react";
import './Home.scss'; 
import {Carousel} from 'react-bootstrap';
import slider1 from './book.jpg'
import slider2 from './bird.jpg'
import slider3 from './smile.jpeg'


function Home() {
  return (
    <div> 
      <br/>
    <Carousel> 
    <Carousel.Item>
      
<img
className="d-block "
src={slider1}
alt="First slide"
width="1125px"
height="470px"

/>
<Carousel.Caption>
<h3>Discover New Activity </h3>
<p>Discover activity for your kids !</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block "
src={slider2}
alt="Third slide"
width="1125px"
height="470px"
/>
<Carousel.Caption>
<h3>Plan Activity</h3>
<p>Plan and book activities for your kids !</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block "
src={slider3}
width="1125px"  
height="470px"
alt="Third slide"
/>
<Carousel.Caption>
<h3>Find Educations Centers </h3>
<p>Find suitable kids Educations centers that can develop kids personality and raise self-confidence and knowledge
positively</p>
</Carousel.Caption>
</Carousel.Item>
    </Carousel>

<section className="py-5">
<div className="container">
  <h1 className="font-weight-light">About Us ~ </h1>
  <p className="lead">Our children needs the best of what we can give them, parents provide unconditional love, they are
always looking to develop their kids socially to build their personalities, their minds, and body, and in this
busy lives searching and looking for the best suitable place that satisfies our needs we get lost
searching, reading, this is why we developed (بارع ) to help our beloved parents meet their needs in
one unified platform that serves for different fields and for all ages.

</p>
</div>
</section>
</div>
  );
}

export default Home;