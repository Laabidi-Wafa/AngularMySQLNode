
const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const formationsController = require('../Controllers/formations');

router.get('/', formationsController.fetchAll);

router.post('/formation',
[
    body('titre').trim().isLength({min:5}).not().isEmpty(),
    body('lieu').trim().isLength({min:5}).not().isEmpty(),
    body('dateDeb').trim().not().isEmpty(),
    body('dateFin').trim().not().isEmpty(),
],
formationsController.postFormation );



router.delete('/:id',formationsController.deleteFormation );











    module.exports = router;
