import React from 'react';
import { getAllChildrens } from '../api';
import Children from '../components/children';

class Childrens extends React.Component {
  componentDidMount() {
    console.log('qqqqqqqqqqqqq', this.props.user)
    getAllChildrens(this.props.user)
      .then((response) => {
        console.log('got the data', response.data.childrens)
        this.props.setChildrens(response.data.childrens);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  render() {
    console.log('qazwsx', this.props.childrens)
    
    
    let allChildrens =this.props.childrens ? this.props.childrens.map((children, index) => {
        return <Children name={children.name}
        gender={children.gender}
        age={children.age}
        interest={children.interest}
        school={children.school}
        allergy={children.allergy}
        key={index} />;
      }): null;
      console.log(allChildrens,"----", this.props.childrens)


    return allChildrens;
  }
}

export default Childrens;