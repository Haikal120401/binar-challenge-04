import React from 'react';
import '../assets/css/navbar.css';


const Navbar =() =>{
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <a className="navbar-brand" href="/#">Binarentcar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/#">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" >Why Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" >Testimonial</a>
                        </li>
                        <li className="nav-item">
                        <   a className="nav-link" href="/#" >FAQ</a>
                        </li>
                    </ul>
                <button className="button" type="submit">Register</button>
                </div>
            </div>
            </nav>
        </>
    )
}
export default Navbar;