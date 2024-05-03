const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  article_number: String,
  quantity: Number,
  unit_price: Number
},
{ _id: false });

const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  postal_code: String,
  country: String
},
{ _id: false });

const opportunitySchema = new Schema({
  guid: {
    type: String,
    unique: true // Ensure guid is unique
  },
  name: String,
  est_revenue: Number,
  contact: String,
  billing_address: addressSchema,
  shipping_address: addressSchema,
  articles: [articleSchema]
}, { versionKey: false });


const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = Opportunity;
