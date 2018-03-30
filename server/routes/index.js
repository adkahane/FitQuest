const path = require("path");
const router = require("express").Router();
const htmlRoutes = require("./html");


router.use("/", htmlRoutes);

module.exports = router;