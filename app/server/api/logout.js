/*
 * @Author: leo 
 * @Date: 2017-08-17 11:47:40 
 * @Last Modified by: leo
 * @Last Modified time: 2017-08-17 15:56:35
 */
const express = require('express');
const router = express.Router();
router.post('/', (req, res, next) => {
    req.session.destroy();
    res.clearCookie('user-token', {
        path: '/',
        domain: ''
    });
    res.redirect('/sign');
})

module.exports = router;