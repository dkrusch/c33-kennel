import React, { Component } from "react"
import { Link } from "react-router-dom"
import dog from "./DogIcon.svg"
import "./Animal.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <img src={dog} className="icon--dog" />
                        <h5>{this.props.animal.name}</h5>
                        <div>
                            {/* So the filter creates an array of arrays of the animals_owners items (where the animal_id is equal to animal.id) */}
                            {/* Then the .map method loops over those arrays reffering to them as "dogowner" those arrays contain objects*/}
                            {/* Then for each array returned by the filter create a div and do a .find */}
                            {/* The .find will look for an owner object where the id is equal the join table owner_id */}
                            {/* Then we will get the name from the found owner object */}
                            {this.props.animalOwners.filter(combo => combo.animal_id === this.props.animal.id)
                            .map(dogowner => {
                                return (
                                <div key={dogowner.owner_id}>
                                {
                                    this.props.owners.find(trueowner => trueowner.id === dogowner.owner_id).name
                                }
                                </div>
                            )
                            })}
                        </div>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick=
                            {() =>
                                {
                                this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                                }
                            }>Edit
                        </button>
                        <a href="#"
                            onClick={() => this.props.deleteItem("animals", this.props.animal.id)}
                            className="card-link">Discharge</a>
                    </div>
                </div>
            </div>
        )
    }
}