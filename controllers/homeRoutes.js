const router = require('express').Router();
const { User, Character } = require('../models');
// const withAuth = require('../utils/authorization');

router.get('/home', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Character}],
        }) 

        const cleanData = userData.map((data) => data.get({ plain: true }));
        console.log(cleanData)
        res.render('home', {
            cleanData
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/visit', async (req, res) => {
    res.render('visit')
});

router.get('/lottery', async (req, res) => {
    res.render('lottery')
});

module.exports = router;