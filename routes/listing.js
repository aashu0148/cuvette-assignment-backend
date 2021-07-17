const express = require("express");
const router = express.Router();

const Listing = require("../models/Listing");

router.post("/add", async (req, res) => {
  const { data } = req.body;

  const result = new Listing({
    ...data,
  });

  result
    .save()
    .then((response) => {
      res.status(201).json({
        status: true,
        message: "Entry created",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: false,
        message: "Error creating entry",
        error: err,
      });
    });
});

router.get("/get", async (req, res) => {
  const result = await Listing.find({});

  if (result.length > 0) {
    res.status(201).json({
      status: true,
      message: "Listings found",
      data: result,
    });
  } else {
    res.status(404).json({
      status: false,
      message: "No listing present",
    });
  }
});

module.exports = router;
