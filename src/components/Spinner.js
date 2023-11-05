import React, { Component } from 'react'
import Gif from '../../src/images/spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Gif} alt="" />
      </div>
    )
  }
}

export default Spinner