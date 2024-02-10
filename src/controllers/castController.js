const router = require('express').Router();

const castService = require('../services/castService');
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/create', isAuth, (req, res) => {
    res.render('cast/create');
});

router.post('/create', isAuth, async (req, res) => {
    const castData = req.body;

    await castService.create(castData);

    res.redirect('/');
});

module.exports = router;