const router = require("express").Router()
const bookController = require ("../../controllers/bookController")
router.route("/results/:bookTile")
    .get(bookController.getBook)

module.exports = router