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

exports.attach = (movieId, castId) => {
    // const movie = await this.getOne(movieId);

    // //TODO: validate castId if exists
    // //TODO: validate if cast is already added
    // movie.casts.push(castId);

    // return movie.save();
    return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}})
}