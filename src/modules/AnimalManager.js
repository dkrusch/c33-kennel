const remoteURL = "http://localhost:5002"

export default {
  getAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAllAnimals() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  },
  getEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
  },
  getAllEmployees() {
    return fetch(`${remoteURL}/employees`).then(e => e.json())
  },
  getOwner(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
  },
  getAllOwners() {
    return fetch(`${remoteURL}/owners`).then(e => e.json())
  },
  getLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
  },
  getAllLocations() {
    return fetch(`${remoteURL}/locations`).then(e => e.json())
  }
}