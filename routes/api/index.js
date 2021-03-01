//route manager for both controllers and routes ExtAPI and the Database 
const path -require("path");
const router = require("express").Router();
const bookRoutes = require("./Books")
const ExtRoutes = require("./Gbooks")

//book routes 
router.use("/Books", bookRoutes);
//external APi
router.use("/Gbooks",ExtRoutes )

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;