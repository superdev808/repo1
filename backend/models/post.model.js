const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    post_title: {
        type: String
    },
    post_content: {
        type: String
    }
});

module.exports = mongoose.model('post', Todo);