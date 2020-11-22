const express = require('express');
const router = express.Router();

// Path to your JSON file
const dummyData = require('../models/avengers.json')

router.get('/', (req, res, next) => {
    res.render('pages/prove10/prove10', {
        title: 'Prove 10',
        path: '/prove10',
        data: dummyData
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/
    let duplicates = false;
    let newItem = req.body.hero;

    // check Duplicates
    for (let data of dummyData.avengers){
        if (data.name === newItem){
            duplicates = true;
        }
    }
    // if no Duplicates add item
    if (duplicates === false){
        dummyData.avengers.push({name: newItem, age: req.body.age});
        console.log(dummyData);
    }
    res.redirect('/prove10')
});
module.exports = router;