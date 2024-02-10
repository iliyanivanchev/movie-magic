const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

exports.getAll = () => Movie.find();

exports.search = (title, genre, year) => {
    let query = {};
    //let query2 = Movie.find();
    
    if (title) {
        query.title = new RegExp(title, 'i');
        //query2.title = query2.find({ title: new RegExp(title, 'i')});
    }
    if (genre) {
        query.genre = genre.toLowerCase();
    }
    if (year) {
        query.year = year;
        //query2 = query2.find({ year});
    }

    return Movie.find(query);
    //return query2
};

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.create = (movieData) => Movie.create(movieData);

exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData);

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
};

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);