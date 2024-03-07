
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  foodGroup: String,
  description: String,
  nutritionalInformation: {
    calories: Number,
    macronutrients: {
      proteins: Number,
      fats: {
        total: Number,
        saturated: Number,
        unsaturated: Number,
        trans: Number,
      },
      carbohydrates: Number,
      sugar: Number,
    },
    micronutrients: {
      vitamins: {
        A: Number,
        C: Number,
        D: Number,
     
      },
      minerals: {
        iron: Number,
        calcium: Number,
        potassium: Number,
  
      },
     
    },
    fiber: Number,
    sodium: Number,
    cholesterol: Number,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: String,
  certifications: [String],
  countryOfOrigin: String,
  brandOrManufacturer: String,
  dietaryRestrictions: [String],
  healthBenefits: String,
  bestPractices: String,
});

module.exports = mongoose.model('Food', foodSchema);
