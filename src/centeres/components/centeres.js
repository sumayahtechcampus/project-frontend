import React from 'react';
import { getAllCenteres } from '../api';
import Center from '../components/center';

class Centeres extends React.Component {
  componentDidMount() {
    getAllCenteres()
      .then((response) => {
        this.props.setCenteres(response.data.centers);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    console.log(this.props.centeres)
    
    
    let allCenteres =this.props.centeres ? this.props.centeres.map((center, index) => {
        return <Center name={center.name}
        category={center.category}
        description={center.description}
        key={index} />;
      }): null;
      console.log(allCenteres,"----", this.props.centeres)


    return allCenteres;
  }
}

export default Centeres;