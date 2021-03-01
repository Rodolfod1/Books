//routes for the external API on this case google books 
const router = require("express").Router();
const ExtApiController = require ("../../controllers/bookController")

//route for "/api/googleapi"
router.route("/")
.get(ExtApiController.findAll);

module.exports = router