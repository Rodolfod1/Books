//route manager for both controllers and routes ExtAPI and the Database 
const router = require("express").Router();
const bookRoutes = require("./Books")
const ExtRoutes= require("./gApi");

//book routes 
router.use("/Books",bookRoutes);
//external APi
router.use("/gApi",ExtRoutes )


module.exports = router;