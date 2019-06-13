let PostModel = require('../models/post.model')

exports.append = function (req, res) {

    console.log(req.body)

    let newPost = new PostModel(
        {
            post_title: req.body.title,
            post_content: req.body.message
        })

    newPost.save()
        .then(newPost => {
            res.status(200).send(req.body)
        })
        .catch(err => {
            res.status(400).send('adding new post failed')
        })
}