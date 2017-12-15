const express = require("express")
const posts = require("./posts")
const comments = require("./comments")

const router = express.Router()

router.get("/posts", posts.get)
router.post("/posts", posts.post)
router.put("/posts/:postId", posts.put)
router.delete("/posts/:postId", posts.delete)

router.get("/posts/:postId/comments", comments.get)
router.post("/posts/:postId/comments", comments.post)
router.put("/posts/:postId/comments/:commentId", comments.put)
router.delete("/posts/:postId/comments/:commentId", comments.delete)

module.exports = router