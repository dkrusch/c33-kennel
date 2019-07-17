import React, { Component } from 'react'


export default class LocationList extends Component {
    render() {
        console.log(this.props.locations)

        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id}>
                        <h4>{location.name}</h4>
                        <h5>{location.address}</h5>
                    </div>
                )
            }
            </section>
        );
    }
}