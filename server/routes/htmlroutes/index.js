const router = require('express').Router();
const questRoutes = require('./questroutes');
const userRoutes = require('./userroutes'); 


router.use('/quest', questRoutes);
router.use('./user', userRoutes);

module.exports = router;