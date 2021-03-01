const router = require("express").Router()
const DbBookController = require("../../controllers/DbBookController")
const bookController = require ("../../controllers/DbBookController")

// to match it with "/api/books"
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create)

//route for "/api/books/id"
router.route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

// router.route("/results/:BookTile")
//     .get(bookController.getBook)

module.exports = router