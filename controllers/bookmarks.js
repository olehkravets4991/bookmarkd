const express = require("express")

const bookmarksRouter = express.Router()

// routes

// INDEX - GET - /people - gets all people
bookmarksRouter.get("/bookmarks", async (req, res) => {
    try {
      // fetch all people from database
      const bookmark = await bookmark.find({});
      // send json of all people
      res.json(bookmark);
    } catch (error) {
      // send error as JSON
      res.status(400).json({ error });
    }
  });

  // CREATE - POST - /people - create a new person
 bookmarksRouter.post("/bookmarks", async (req, res) => {
    try {
        // create the new person
        const bookmark = await bookmark.create(req.body)
        // send newly created person as JSON
        res.json(bookmark)
    }
    catch(error){
        res.status(400).json({ error })
    }
})

// SHOW - GET - /people/:id - get a single person
bookmarksRouter.get("/people/:id", async (req, res) => {
    try {
      // get a person from the database
      const bookmark = await bookmark.findById(req.params.id);
      // return the person as json
      res.json(bookmark);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  // UPDATE - PUT - /people/:id - update a single person
  bookmarksRouter.put("/bookmarks/:id", async (req, res) => {
    try {
      // update the person
      const bookmark = await bookmark.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      // send the updated person as json
      res.json(bookmark);
    } catch (error) {
      res.status(400).json({ error });
    }
  });

  // DESTROY - DELETE - /people/:id - delete a single person
  bookmarksRouter.delete("/bookmarks/:id", async (req, res) => {
    try {
        // delete the person
        const bookmark = await bookmark.findByIdAndDelete(req.params.id)
        // send deleted person as json
        res.status(204).json(bookmark)
    } catch(error){
        res.status(400).json({error})
    }
})

//hello

module.exports=bookmarksRouter