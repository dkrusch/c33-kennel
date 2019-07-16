import React, { Component } from 'react'


export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        <h4>Name: {owner.name}</h4>
                        <h5>Phone: {owner.phonenumber}</h5>
                        <button onClick={() => this.props.deleteItem("owners", owner.id)}
                        className="card-link">Delete</button>
                    </div>
                )
            }
            </section>
        );
    }
}