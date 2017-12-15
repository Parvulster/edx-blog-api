const store = require("../store")

const routes = {}

routes.get = (req, res) => {
    res.status(200).send(store)
}

routes.post = (req, res) => {
    let obj = req.body
    let id = store.length
    store.push(obj)
    res.status(201).send(store[id])
}

routes.put = (req, res) => {
    store[req.params.postId] = req.body
    res.status(200).send(store[req.params.postId])
}

routes.delete = (req, res) => {
    store.splice(req.params.postId, 1)
    res.status(204).send()
}

module.exports = routes