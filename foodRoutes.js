
const express = require('express');
const router = express.Router();
const Food = require('../models/foodModel');

router.post('/', async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json(newFood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve all food items
router.get('/', async (req, res) => {
  try {
    const allFood = await Food.find();
    res.status(200).json(allFood);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve a specific food item by ID
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a food item
router.put('/:id', async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFood) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a food item
router.delete('/:id', async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);
    if (!deletedFood) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.status(200).json({ message: 'Food deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
