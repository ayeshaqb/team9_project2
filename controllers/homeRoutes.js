const router = require('express').Router();
// const { } = require('../models');
// const withAuth = require('../utils/authorization');

router.get('/home', async (req, res) => {
    res.render('home')
});

module.exports = router;