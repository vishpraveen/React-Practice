import React, { useState } from 'react'
import { NavItem } from '../model/NavItem'

function Navbar() {

    const pages: NavItem[] = [
        { label: "Home", url: "#", selected: true, enabled: true, onClick: () => { }, },
        { label: "Link", url: "#", selected: false, enabled: true, onClick: () => { }, },
        { label: "Dropdown", url: "#", selected: false, enabled: true, onClick: () => { }, },
        { label: "Disabled", url: "#", selected: false, enabled: true, onClick: () => { }, },
    ]

    let [links, setLinks] = useState<NavItem[]>(pages)

    function onNavItenClick() {

    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map(i =>
                            <li className="nav-item" key={i.label}>
                                <a className={i.selected ? "nav-link active" : "nav-link"} aria-current="page" href={i.url}>{i.label}</a>
                            </li>
                        )}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar