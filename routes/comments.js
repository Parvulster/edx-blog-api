const store = require("../store")

const routes = {}

routes.get = (req, res) => {
    res.status(200).send(store[req.params.postId].comments)
}

routes.post = (req, res) => {
    let obj = req.body
    if (!store[req.params.postId].comments) {
        store[req.params.postId].comments = []
    }
    let id = store[req.params.postId].comments.length
    store[req.params.postId].comments.push(obj)
    res.status(201).send(store[req.params.postId].comments[id])
}

routes.put = (req, res) => {
    store[req.params.postId].comments[req.params.commentId] = req.body
    res.status(200).send(store[req.params.postId].comments[req.params.commentId])
}

routes.delete = (req, res) => {
    store[req.params.postId].comments.splice(req.params.commentId, 1)
    res.status(204).send()
}

module.exports = routes