import { Link } from 'react-router-dom';
import logo from './corelogo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
                <ul className="nav-list">
                <li><Link
                to='/'
                className='nav-links'
                >Home</Link></li>
                <li><Link
                to='/About'
                className='nav-links'
              >About</Link></li>
              <li><Link
                to='/Events'
                className='nav-links'
              >Events</Link></li>
              <li><Link
                to='/Resources'
                className='nav-links'
              >Resources</Link></li>
              <li><Link
                to='/Members'
                className='nav-links'
              >Members</Link></li>
              <li><Link
                to='/Alumni'
                className='nav-links'
                >Alumni</Link></li>
                <li><Link
                to='/Contact'
                className='nav-links'
              >Contact</Link></li>
                </ul>
            </nav>
            <button className='btn-register'><Link to='/Register' className='link-register'>Register</Link></button>
        </>
    )
}

export default Navbar
