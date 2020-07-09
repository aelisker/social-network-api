const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThoughts);

router
  .route('/:id')
  .get(getThoughtById);

router
  .route('/:userId')
  .post(createThought);

module.exports = router;