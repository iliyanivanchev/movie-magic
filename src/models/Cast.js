const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [5, 'name should be at least 5 characters'],
        match: [/^[a-zA-Z0-9\s]+$/, 'name should be alphanumeric'],

    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 120,
    },
    born: {
        type: String,
        required: true,
        minLength: [10, 'born should be at least 10 characters'],
        match: [/^[a-zA-Z0-9\s]+$/, 'born should be alphanumeric'],
    },
    nameInMovie: {
        type: String,
        required: true,
        minLength: [5, 'nameInMovie should be at least 5 characters'],
        match: [/^[a-zA-Z0-9\s]+$/, 'nameInMovie should be alphanumeric'],


    },
    castImage: {
        type: String,
        required: true,
        validate: {
            validator(value) {
                return /^https?:\/\//.test(value)
            },
            message: (props) => `${props.value} is invalid url for the castImage`
        }
    },
    // movies: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Movie'
    // }]
});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;