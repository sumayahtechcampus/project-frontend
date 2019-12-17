import React from 'react';
import { getAllCenteres } from '../api';
import Center from './center';

class Centeres extends React.Component {
  componentDidMount() {
    getAllCenteres()
      .then((response) => {
        this.props.setCenteres(response.data.centeres);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    let allCenteres = <h2>No centeres</h2>;

    if (this.props.centeres.length > 0) {
      allCenteres = this.props.map((center, index) => {
        return <Center name={center.name}
        category={center.category}
        description={center.description}
        id={center._id}
        key={index} />;
      });
    }

    return allCenteres;
  }
}

export default Centeres;