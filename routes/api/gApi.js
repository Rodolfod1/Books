//routes for the external api 
const router = require("express").Router();
const ExtController = require ("../../controllers/ExtApiController");

router
    .route("/")
    .get(ExtController.getBook);

    module.exports = router;