import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className='pb-5 border-bottom'>
        <NavLink className=" ml-5 btn btn-secondary" to ="/user-page">USERS</NavLink>
      </div>
    ) 
  }
}
