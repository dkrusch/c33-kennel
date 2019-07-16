import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import SearchResults from './searchresults/SearchResults'


class ApplicationViews extends Component {
    deleteItem = (name, id) => {
        let newObj = {}
        return fetch(`http://localhost:5002/${name}/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/${name}`))
        .then(e => e.json())
        .then(items => newObj[name] = items)
        .then(() => this.setState(newObj))
    }

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
            .then(() => {console.log("state STATE", this.state)})
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList deleteItem={this.deleteItem} animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList deleteItem={this.deleteItem} employees={this.state.employees} />
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

export default ApplicationViews