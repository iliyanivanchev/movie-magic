const router = require('express').Router();

const castService = require('../services/castService');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/create', isAuth, (req, res) => {
    res.render('cast/create');
});

router.post('/create', isAuth, async (req, res) => {
    const castData = req.body;

    try {

        await castService.create(castData);

        res.redirect('/');

    } catch (err) {
        const message = getErrorMessage(err);
        res.render('cast/create', { ...castData, error: message });
    }
});

module.exports = router;