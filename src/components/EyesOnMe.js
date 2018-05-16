// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  thing1 = () => {
    console.log('Good!')
  }

  thing2 = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.thing1} onBlur={this.thing2}>Button</button>
    )
  }

}

export default EyesOnMe
