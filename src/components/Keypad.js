// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  thing = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.thing} />
    )
  }

}

export default Keypad
