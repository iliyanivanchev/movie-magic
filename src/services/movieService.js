const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

exports.search = async (title, genre, year) => {
    let moviesResult = await Movie.find().lean();

    if (title) {
        moviesResult = moviesResult.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (genre) {
        moviesResult = moviesResult.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }
    if (year) {
        moviesResult = moviesResult.filter(movie => movie.year == year);
    }
    return moviesResult;
};

exports.getOne = (movieId) => Movie.findById(movieId);

exports.create = (movieData) => Movie.create(movieData);