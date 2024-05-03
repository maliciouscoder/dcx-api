const express = require("express");
const{
    createOpportunity,
    deleteOpportunity,
    getOpportunity,
    getOpportunities
} = require("../controllers/opportunity");

const router = express.Router();

router.post("/", createOpportunity);

router.get("/", getOpportunities);

router.get("/:id", getOpportunity);

router.delete("/:id", deleteOpportunity);

module.exports = router;