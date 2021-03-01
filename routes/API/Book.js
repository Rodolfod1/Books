const router = require("express").Router()
const bookController = require ("../../controllers/bookController")
router.route("/results/:BookTile")
    .get(bookController.getBook)

module.exports = router