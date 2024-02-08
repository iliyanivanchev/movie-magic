const router = require('express').Router();

const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const newMovie = req.body;

    try {
        await movieService.create(newMovie);

        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect('/create');
    }
});

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movie = movieService.getOne(movieId);
    //TODO: This is not perfect, use handlebars helpers
    movie.ratingStar = new Array(Number(movie.rating)).fill(true); //1st variant
    //movie.ratingStar = `&#x2605; `.repeat(Number(movie.rating)); // 2nd variant

    res.render('details', { movie });
});

module.exports = router;