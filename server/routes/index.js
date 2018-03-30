const path = require("path");
const router = require("express").Router();
const htmlRoutes = require("./routes/htmlroutes");


router.use("/", htmlRoutes);

module.exports = router;