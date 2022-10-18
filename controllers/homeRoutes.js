const router = require('express').Router();
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');
const icon = require('../icon')

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/home');
        return;
      }
      res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/home', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Character}],
        }) 

        const serializedData = userData.get({ plain: true });
        console.log(serializedData)
        icon(serializedData.name);
        res.render('home', {
            ...serializedData,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/visit', withAuth, async (req, res) => {
    res.render('visit', {
        logged_in: req.session.logged_in
    })
});

router.get('/lottery', withAuth, async (req, res) => {
    res.render('lottery', {
        logged_in: req.session.logged_in
    })
});

router.get('/archive', withAuth, async (req, res) => {
    res.render('archive', {
        logged_in: req.session.logged_in
    })
});

module.exports = router;