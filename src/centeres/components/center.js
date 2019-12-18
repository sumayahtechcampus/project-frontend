import React from 'react';

class Center extends React.Component {
  

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <sub>{this.props.category}</sub>
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}

export default Center;