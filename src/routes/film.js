const router = require('express').Router();
const filmController = require('../controllers/filmController');

// endpoint - verbos http - metodos mongoose
router.route('/films').post((req, res) => filmController.create(req, res));
router.route('/films').get((req, res) => filmController.getAll(req, res));
router.route('/films/:id').get((req, res) => filmController.get(req, res));
router.route('/films/:id').put((req, res) => filmController.update(req, res));
router.route('/films/:id').delete((req, res) => filmController.delete(req, res));

module.exports = router;