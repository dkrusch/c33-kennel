import React, { Component } from "react";
import dog from "./DogIcon.svg";
import "./Animal.css";
import { Link } from "react-router-dom";

class AnimalList extends Component {
  render() {
    console.log("renderaoiejf");
    return (
      <section className="animals">
        {this.props.animals.map(animal => (
          <div key={animal.id} className="card">
            <div className="card-body">
              <div className="card-title">
                <img src={dog} className="icon-dog" />
                <h5>{animal.name}</h5>
                <div>
                  {/* So the filter creates an array of arrays of the animals_owners items (where the animal_id is equal to animal.id) */}
                  {/* Then the .map method loops over those arrays reffering to them as "dogowner" those arrays contain objects*/}
                  {/* Then for each array returned by the filter create a div and do a .find */}
                  {/* The .find will return  */}
                  {this.props.animalOwners.filter(combo => combo.animal_id === animal.id)
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
                <Link className="nav-link" to={`/animals/${animal.id}`}>
                  Details
                </Link>
                <button
                  onClick={() => this.props.deleteItem("animals", animal.id)}
                  className="card-link"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default AnimalList;
