
import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  // const handleThemeChange = (theme) =>{
  //   props.changeTheme(theme)
  //   console.log("Done")
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Text-Tweaker">{props.title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/translator">Translator</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/VoiceText">Voice Text</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active"  to="/Summariser">Summariser</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">{props.about}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      <div className="dropdown mx-5">
      {/* <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Theme
      </button>
      <ul className="dropdown-menu ">
      <li><button className="dropdown-item" onClick={() => handleThemeChange('#ff0909')}>Red</button></li>
      <li><button className="dropdown-item" onClick={() => handleThemeChange('#0000ff')}>Blue</button></li>
      <li><button className="dropdown-item" onClick={() => handleThemeChange('#00ff00')}>Green</button></li>

      </ul> */}
    </div>
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>


    </div>
    </div>
  </div>
</nav>
  )
}
/*Navbar.PropTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: 'WordsUtils',
  about: 'About'
}*/