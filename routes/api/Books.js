const router = require("express").Router()
const bookController = require ("../../controllers/DbBookController")

// to match it with "/api/Books"
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create)

//route for "/api/Books/id"
router.route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);


module.exports = router