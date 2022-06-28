const express = require('express');
const router = express.Router();

const candidatController = require('../controllers/candidat.controller');

// get all candidat
router.get('/', candidatController.getCandidatList);

// get candidat by ID
router.get('/:id',candidatController.getCandidatByID);

// create new candidat
router.post('/', candidatController.createNewCandidat);

// update candidat
router.put('/:id', candidatController.updateCandidat);

// delete candidat
router.delete('/:id',candidatController.deleteCandidat);

module.exports = router;