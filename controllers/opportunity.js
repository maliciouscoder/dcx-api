const Opportunity = require("../models/opportunity");

const createOpportunity = async (req, res, next) => {
  try {
    const { name, est_revenue, contact, billing_address, shipping_address, articles } = req.body;

    // Check if required fields are present
    if (!name || !est_revenue || !contact || !billing_address || !shipping_address || !articles) {
      res.status(400);
      return next(new Error("Name, est_revenue, contact, billing_address, shipping_address, and articles fields are required"));
    }

    const opportunity = await Opportunity.create({
      name,
      est_revenue,
      contact,
      billing_address,
      shipping_address,
      articles
    });

    res.status(201).json({
      opportunity,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const getOpportunities = async (req, res, next) => {
  try {
    const opportunities = await Opportunity.find();

    res.status(200).json({
      opportunities,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

const getOpportunity = async (req, res, next) => {
  const { id } = req.params;
  try {
    const opportunity = await Opportunity.findById(id);

    if (!opportunity) {
      res.status(404);
      return next(new Error("Opportunity not found"));
    }

    res.status(200).json({
      opportunity,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};  
  

const deleteOpportunity = async (req, res, next) => {
  const { id } = req.params;
  try {
    const opportunity = await Opportunity.findById(id);

    if (!opportunity) {
      res.status(404);
      return next(new Error("Opportunity not found"));
    }

    await Opportunity.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Opportunity has been deleted.",
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
};

module.exports = {
  createOpportunity,
  getOpportunities,
  getOpportunity,
  deleteOpportunity,
};
