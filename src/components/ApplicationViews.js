import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import SearchResults from './searchresults/SearchResults'
import APIManager from "../modules/APIManager"
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import { withRouter } from 'react-router'

console.log(APIManager)

class ApplicationViews extends Component {
    deleteItem = (name, id) => {
        let newObj = {}
        return fetch(`http://localhost:5002/${name}/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(APIManager.getAll(name))
        .then(group => {
            this.props.history.push("/${name}")
            this.setState(newObj[name] = group)
        })
    }

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        // Example code. Make this fit into how you have written yours.
        APIManager.getAll("animals").then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        APIManager.getAll("employees").then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        APIManager.getAll("owners").then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
        APIManager.getAll("locations").then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
            // .then(animals => newState.animals = animals)
            // .then(() => fetch("http://localhost:5002/employees")
            // .then(r => r.json()))
            // .then(employees => newState.employees = employees)
            // .then(() => fetch("http://localhost:5002/locations")
            // .then(r => r.json()))
            // .then(locations => newState.locations = locations)
            // .then(() => fetch("http://localhost:5002/owners")
            // .then(r => r.json()))
            // .then(owners => newState.owners = owners)
            // .then(() => this.setState(newState))
            // .then(() => {console.log("state STATE", this.state)})
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteItem={this.deleteItem} animals={this.state.animals} />
                }} />

                {/*
                    This is a new route to handle a URL with the following pattern:
                        http://localhost:3000/animals/1

                    It will not handle the following URL because the `(\d+)`
                    matches only numbers after the final slash in the URL
                        http://localhost:3000/animals/jack
                */}
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!animal) {
                        animal = {id:404, name:"404", breed: "Dog not found"}
                    }

                    return <AnimalDetail animal={animal} dischargeAnimal={this.deleteItem} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteItem={this.deleteItem} employees={this.state.employees} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    // Find the employee with the id of the route parameter
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )

                    // If the animal wasn't found, create a default one
                    if (!employee) {
                        employee = {id:404, name:"404", breed: "Dog not found"}
                    }

                    return <EmployeeDetail employee={employee} dischargeEmployee={this.deleteItem} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList deleteItem={this.deleteItem} owners={this.state.owners} />
                }} />
                <Route path="/search" render={(props) => {
                    console.log("/search", this.props.results)
                    return <SearchResults results={this.props.results} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)