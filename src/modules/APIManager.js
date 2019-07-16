const remoteURL = "http://localhost:5002"

export default Object.create(null, {
  get: {
    value: function(name, id) {
      return fetch(`${remoteURL}/${name}/${id}`).then(e => e.json())
    }
  },
  getAll: {
    value: function (name) {
      return fetch(`${remoteURL}/${name}`).then(e => e.json())
    }
  }
})