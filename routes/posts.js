const store = require("../store")

const routes = {}

routes.get = (req, res) => {
    res.status(200).send(store)
}

routes.post = (req, res) => {
    if (!req.body.name || !req.body.url) {
        return res.status(404).send("Invalid Parameters!")
    }
    let obj = {
        name: req.body.name,
        url: req.body.url,
        text: req.body.text,
        comments: []
    }
    let id = store.length
    store.push(obj)
    res.status(201).send({id: id})
}

routes.put = (req, res) => {
    if (!req.body.name && !req.body.url && !req.body.text) {
        return res.status(404).send("Invalid Parameters!")
    }
    let obj = {}
    if (req.body.name) {
        obj["name"] = req.body.name
    }
    if (req.body.url) {
        obj["url"] = req.body.url
    }
    if (req.body.text) {
        obj["text"] = req.body.text
    }
    store[req.params.postId] = Object.assign(store[req.params.postId], obj)
    res.status(200).send(store[req.params.postId])
}

routes.delete = (req, res) => {
    store.splice(req.params.postId, 1)
    res.status(204).send()
}

module.exports = routes