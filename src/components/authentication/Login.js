import React, { Component } from "react"

export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        checked: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (event) => {
        const stateToChange = {}
        console.log(event.target.id)
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleCheck = (event) => {
        this.setState({checked: event.target.checked})
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()
        console.log(this.state)

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */

        if (this.state.checked)
        {
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }))

            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }))
        }
        else
        {
            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }))
        }

        this.props.history.push("/")
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                <label htmlFor="rememberMe">
                    Remember Me
                </label>
                <input type="checkbox" onClick={this.handleCheck}
                       id="checkem"
                       required="" />
                <button type="submit" onClick={this.handleLogin}>
                    Sign in
                </button>
            </form>
        )
    }
}
// onClick={this.buttonClick}