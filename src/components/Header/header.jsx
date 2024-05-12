import React from 'react';
import styles from './styles.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="site-name"> <p className='sticky'>LIBRARIAN!</p>
            <nav className={`navbar navbar-expand-lg navbar-light custom-header-bg ${styles.sticky}`}>
                <div className="container">



                    Logo

                    <div className="container d-flex justify-content-center">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav justify-content-center px-5">
                                <li className="nav-item">

                                    Home

                                </li>
                                <li className="nav-item dropdown">

                                    Orders

                                    <div className="dropdown-content">

                                        Orders Placed


                                        My Orders

                                    </div>
                                </li>

                                <li className="nav-item">

                                    Dashboard

                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex px-1">

                        Sign In


                        Sign Up

                    </div>
                    <div>
                        <button type="button" className="btn btn-danger w-100 mt-3">Sign Out</button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
