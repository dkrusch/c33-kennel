import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                        <button onClick={() => this.props.deleteItem("employees", employee.id)}
                        className="card-link">Delete</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList