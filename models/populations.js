const mongoose = require('mongoose');

const populationSchema = new mongoose.Schema({
	country: {type: String, require: true},
	totalPopulation: String,
	sexRatio: String
});

const Population = mongoose.model('Population', populationSchema);

module.exports = Population;