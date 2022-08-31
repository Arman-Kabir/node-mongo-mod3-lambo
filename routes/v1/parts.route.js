const express = require("express");
const toolsControllers = require("../../controllers/parts.controller");

const router = express.Router();


// router.get("/", (req, res) => {
//     res.send("toools found ");
// });

// router.post("/", (req, res) => {
//     res.send("tool added");
// });

/**
 * 
 */

router.route("/")
    .get(toolsControllers.getAllTools)
    .post(toolsControllers.saveATool)

module.exports = router;