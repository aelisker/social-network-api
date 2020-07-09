const router = require('express').Router();
const testRoutes = require('./test-routes');
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/test', testRoutes);
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;