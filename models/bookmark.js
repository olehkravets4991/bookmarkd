// BookmarkSchema

const mongoose = require('./connection');

const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
})

const Bookmark = mongoose.model('bookmark', BookmarkSchema)

module.exports=Bookmark;