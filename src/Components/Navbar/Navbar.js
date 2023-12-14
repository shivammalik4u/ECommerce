import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';


function Navbar() {

    const [activePage, setactivePage] = useState('Shop');

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className='logo' src={logo} alt="logo"></img>
                <a className="navbar-brand" href="#">Shopper</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${activePage === "Shop" ? 'active' : ''}`} aria-current="page" to="/shop" onClick={() => setactivePage('Shop')}>Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${activePage === "Mens" ? 'active' : ''}`} aria-current="page" to="/mens" onClick={() => setactivePage('Mens')}>Mens</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${activePage === "Women" ? 'active' : ''}`} aria-current="page" to="/women" onClick={() => setactivePage('Women')}>Women</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${activePage === "Kids" ? 'active' : ''}`} aria-current="page" to="/kids" onClick={() => setactivePage('Kids')}>Kids</Link>
                        </li>
                       
                    </ul>
                    <div className="d-flex">
                        <div className="img-container">
                            <Link to='/cart'>
                            <img className="mx-2" src={cart_icon} alt="cart" />
                            <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                                0
                                <span className="visually-hidden">unread messages</span>
                            </span>
                            </Link>
                        </div>
                        <Link to='/login'>
                            <button className="btn btn-outline-primary mx-2" type="submit">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar