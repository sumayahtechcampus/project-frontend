import React from 'react';

class Children extends React.Component {
  

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <sub>{this.props.age}</sub>
        <p>{this.props.interest}</p>
        <p> {this.props.school}</p>
       <p> {this.props.allergy} </p>
      
      </div>
    );
  }
}

export default Children;