const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'title should be at least 5 characters'],
        match: [/^[a-zA-Z0-9\s]+$/, 'title should be alphanumeric'],
    },
    genre: {
        type: String,
        required: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9\s]+$/, 'genre should be alphanumeric'],

    },
    director: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9\s]+$/, 'director should be alphanumeric'],
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2024,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    description: {
        type: String,
        required: true,
        manLength: [20, 'description should be atleast 20 characters'],
        match: [/^[a-zA-Z0-9\s]+$/, 'description should be alphanumeric'],
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;