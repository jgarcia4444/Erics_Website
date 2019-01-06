const express = require('express');
const Joi = require('joi');

const db = require('../db/connection');
const users = db.get('users');

const router = express.Router();

const schema = Joi.object().keys({
    firstName: Joi.string().regex(/(^[a-zA-Z']+$)/).min(2).max(40).required(),
    lastName: Joi.string().regex(/(^[a-zA-Z']+$)/).required(),
    phoneNumber: Joi.number().integer().required(),
    email: Joi.string().email({minDomainAtoms: 2}),
    preferredContact: Joi.string().required(),
    numberOfRooms: Joi.number().integer().required(),
    numberOfBathrooms: Joi.number().integer().required(),
    priceRange: Joi.string().required(),
    zipCode: Joi.number().integer().min(5).max(5).required(),
});


router.get('/', (req, res) => {
    res.json({
        message: 'This is the router in work'
    });
});

router.post('/', (req, res, next) => {
    const result = Joi.validate(req.body, schema);

    if(result.error === null) {
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            preferredContact: req.body.preferredContact,
            numberOfRooms: req.body.numberOfRooms,
            numberOfBathrooms: req.body.numberOfBathrooms,
            priceRange: req.body.priceRange,
            zipCode: req.body.zipCode,
        };



    } else {
        res.status(422);
        next(result.error);
    }

});

module.exports = router;
