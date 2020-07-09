const router = require('express').Router();
const { testGet } = require('../../controllers/test-controller');

router.route('/').get(testGet);

module.exports = router;