import React from 'react';
import card from './playk.jpeg' ; 
class Center extends React.Component {
  

  render() {
    return (

<div className="container">
<br/>


<div className="row">
  <div className="col-md-7">
    <a href="#">
      <img className="img-fluid rounded mb-3 mb-md-0" src={card} alt=""/>
    </a>
  </div>
  <div className="col-md-5">
    <br/> 
    <br/>
    <h3>{this.props.name}</h3>
    <h5>{this.props.category}</h5>
    <p>{this.props.description}</p>
    <a className="btn  btn-block text-uppercase btn-pos"  href="#">Register </a>

   
  </div>
</div>
</div>



    );
  }
}

export default Center;