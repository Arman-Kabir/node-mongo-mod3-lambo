const express = require("express");
const limiter = require("../../controllers/middleware/limiter");
// const { limiter } = require("../..");
const viewCount = require("../../controllers/middleware/viewCount");
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
    .post(toolsControllers.saveATool);

router.route("/:id")
    .get(viewCount, limiter, toolsControllers.getPartDetail);

module.exports = router;