/** Libs */
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

/** Global Components */

/** Local Components */

/** Assets */

/** Utils */

export default function Navbar({brand_name}) {
  // State

  // Hooks

  // Func

  // Use Effect

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{brand_name}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((item, i) => (
              <NavLink key={i} to={item?.link} className={(nav) => nav.isActive && 'active'}>
                <li className="nav-item">
                  <a className="nav-link">{item?.label}</a>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const navLinks = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Help',
    link: '/help'
  },
]

Navbar.defaultProps = {
  brand_name: 'LOGO'
}

Navbar.propTypes = {
  brand_name: PropTypes.string,  
}