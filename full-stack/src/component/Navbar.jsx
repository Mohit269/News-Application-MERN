import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/general">Home</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/technology">Technology</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/business">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entertainment">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">Sports</a>
              </li>

            </ul>
          </div>
          <button style={{ borderRadius:"100px"}}className='btn btn-success'><a href='/register' style={{color:"white",textDecoration:"none"}}>Register</a></button>&nbsp;<button style={{ borderRadius:"100px"}}className='btn btn-success'><a href='/login' style={{color:"white",textDecoration:"none"}}>Login</a></button>
          
        </nav>
      </div>
      
    )
  }
};
