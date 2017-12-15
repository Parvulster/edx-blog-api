const store = require("../store")

const routes = {}

routes.get = (req, res) => {
    res.status(200).send(store[req.params.postId].comments)
}

routes.post = (req, res) => {
    if (!req.body.text) {
        return res.status(404).send("Invalid Parameters!")
    }
    let obj = {
        text: req.body.text
    }
    let id = store[req.params.postId].comments.length
    store[req.params.postId].comments.push(obj)
    res.status(201).send({id: id})
}

routes.put = (req, res) => {
    if (!req.body.text) {
        return res.status(404).send("Invalid Parameters!")
    }
    let obj = {
        text: req.body.text
    }
    store[req.params.postId].comments[req.params.commentId] = obj
    res.status(200).send(store[req.params.postId].comments[req.params.commentId])
}

routes.delete = (req, res) => {
    store[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
}

module.exports = routes