const express = require("express")
const Bookmark = require("../models/bookmark.js")
const bookmarksRouter = express.Router()


// routes

// INDEX - GET - /bookmarks - gets all bookmarks
bookmarksRouter.get("/bookmarks", async (req, res) => {
    try {
      // fetch all bookmarks from database
      const bookmarksRouter = await Bookmark.find({});
      // send json of all bookmarks
      res.json(bookmarksRouter);
    } catch (error) {
      // send error as JSON
      res.status(400).json({ error });
    }
    console.log("is this working")
  });

  // CREATE - POST - /bookmarks - create a new bookmark
 bookmarksRouter.post("/bookmarks", async (req, res) => {
    try {
        // create the new bookmark
        const bookmark = await Bookmark.create(req.body)
        // send newly created bookmark as JSON
        res.json(bookmark)
    }
    catch(error){
        res.status(400).json({ error })
    }
})

// SHOW - GET - /bookmarks/:id - get a single bookmark
bookmarksRouter.get("/bookmarks/:id", async (req, res) => {
    try {
      // get a bookmark from the database
      const bookmark = await Bookmark.findById(req.params.id);
      // return the bookmark as json
      res.json(bookmark);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  // UPDATE - PUT - /bookmarks/:id - update a single bookmark
  bookmarksRouter.put("/bookmarks/:id", async (req, res) => {
    try {
      // update the bookmark
      const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      // send the updated bookmark as json
      res.json(bookmark);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  // DESTROY - DELETE - /bookmarks/:id - delete a single bookmark
  bookmarksRouter.delete("/bookmarks/:id", async (req, res) => {
    try {
        // delete the bookmark
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        // send deleted bookmark as json
        res.status(204).json(bookmark)
    } catch(error){
        res.status(400).json({error})
    }
})

//hello

module.exports=bookmarksRouter