'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: { type: String, required: true},
    calories: { type: Number, required: true},
    type: { type: String, uppercase:true, enum: ['FRUIT', 'VEG', 'BREAD'] }
});

module.exports = mongoose.model('food', foodSchema);

