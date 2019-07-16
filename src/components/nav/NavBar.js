import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { withRouter } from "react-router-dom"

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow" id="supernav">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                </ul>
                <div className="md-form active-cyan active-cyan-2 m-2">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onKeyPress={this.props.press}></input>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar)