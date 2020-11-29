const express = require('express');
const router = express.Router();

// Path to your JSON file
const dummyData = require('../models/avengers.json')

router.get('/', (req, res, next) => {
    res.render('pages/prove11/prove11', {
        title: 'Prove 11',
        path: '/prove11'
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/
    const { name } = req.body

    // if no Duplicates add item
    const nameData = a => a.name === name;
    const ageData = a => a.age === age;

    if (!dummyData.avengers.some(nameData) /* && !dummyData.avengers.some(ageData)*/)
        dummyData.avengers.push({ name})
        //dummyData.avengers.push({ age })
        res.json(dummyData)
    })
module.exports = router;