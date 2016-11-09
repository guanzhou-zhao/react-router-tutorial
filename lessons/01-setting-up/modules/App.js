import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
export default React.createClass({
  render() {
    return (
      <div>
        <h1><Link to="/">React Router Tutorial</Link></h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {/* add this */}
        {this.props.children}
      </div>
    )
  }
})
