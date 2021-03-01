const router = require("express").Router();
const bookRoutes = require("./Books")

//book routes 
router.use("/Books", bookRoutes);
module.exports = router;