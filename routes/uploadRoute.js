const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/uploadController");

// Route to upload image
router.post("/postupdate", uploadController.uploadImage);

module.exports = router;

