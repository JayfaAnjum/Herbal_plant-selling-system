const express=require('express');
const { getplants, getSinglePlant, createNewPlant, updatePlant, deletePlant } = require('../controller/plantController');

const router=express.Router();



router.route('/getAllPlants').get(getplants);
router.route('/getSinglePlant/${id}').get(getSinglePlant);
router.route('/createNewPlant').post(createNewPlant);
router.route('/updatePlant/${id}').put(updatePlant);
router.route('/deleteplant/${id}').get(deletePlant);


