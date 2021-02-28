const path = require("path")
const router = require("express").Router();
const BookRoutes= require("./API/Book")

//API routes
router.use("/api", BookRoutes);

module.exports = router