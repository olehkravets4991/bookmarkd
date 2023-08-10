// Import our dependencies

require("dotenv").config();
const { PORT = 8000, DATABASE_URL } = process.env
// import express
const express = require("express");
// create application object
const app = express()
// import mongoose
const mongoose = require("mongoose")
// import cors
const cors = require("cors")
// import morgan
const morgan = require("morgan")

const bookmarksRouter = require("./controllers/bookmarks.js")
const Bookmark = require("./models/bookmark.js");
//////////////////////////////
// Middleware
//////////////////////////////
// cors for preventing cors errors (allows all requests from other origins)
app.use(cors())
// morgan for logging requests
app.use(morgan("dev"))
// express functionality to recognize incoming request objects as JSON objects
app.use(express.json())
// Routes
app.use("/", bookmarksRouter)

// // create a test route
// app.get("/", (req, res) => {
//     res.json({hello: "world"})
// })

app.get('/', (req, res) => {
    res.redirect('/bookmarks');
    })

// Listen
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })