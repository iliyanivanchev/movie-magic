const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

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

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.create = (movieData) => Movie.create(movieData);

exports.attach = async (movieId, castId) => {

    //This is optional and we dont need it in this case
    // const movie = await this.getOne(movieId);
    // const casts = await Cast.findById(castId);

    // casts.movies.push(movie);
    // casts.save();

    // //TODO: validate castId if exists
    // //TODO: validate if cast is already added
    // movie.casts.push(castId);

    // return movie.save();
    return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}})
}