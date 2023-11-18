const Table = require("../models/Tables");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newTable = new Table(req.body);
  
    try {
      const savedTable = await newTable.save();
      res.status(200).json(savedTable);
    } catch (err) {
      res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
      const updatedTable = await Table.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedTable);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE
// Only admins should delete tables
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Table.findByIdAndDelete(req.params.id);
      res.status(200).json("Table has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET Table
// Might be needed for admin delete tables
// Will find specific tables for deletion or updating
router.get("/find/:id", async (req, res) => {
    try {
      const table = await Table.findById(req.params.id);
      res.status(200).json(table);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET ALL Tables
// Fetching the tables for view
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    try {
      let table;
  
      if (qNew) {
        table = await Table.find().sort({ createdAt: -1 }).limit(1);
      } 
      else {
        table = await Table.find();
      }
  
      res.status(200).json(table);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;