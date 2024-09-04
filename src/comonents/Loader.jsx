import React, { Component } from 'react'
import Loading from '../assets/loading.gif'
export default class Loader extends Component {
  render() {
    return (
        <img
          src={Loading}
          alt="Loading..."
          style={{ width: '40px', margin: 'auto', display: 'block' }}
        />
    )
  }
}
