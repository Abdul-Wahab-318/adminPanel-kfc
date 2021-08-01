import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
        <div className="header-parent">
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                    <Link to="/createProduct" className="nav-link" href="#">Sign out</Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}
