import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className='header-style'>
      <h1>{props.pageTitle}</h1>
    </div>
  )
}

export default Header
