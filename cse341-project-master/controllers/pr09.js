//const Product = require('../models/pr09');
const fetch = require('node-fetch');
const pokeList = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';
let prevP;
let nextP;

exports.getPoke = (req, res, next) => {
fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
    .then(res => res.json())
    .then(resData => 
    {   
        nextP = resData.next;
        prevP = resData.previous;
        res.render('pages/prove09/prove09', {
        title: 'Prove09', 
        path: 'prove09',
        data: resData.results,
        pokemonList: resData.results,
        hasPreviousPage: resData.previous,
        hasNextPage: resData.next
    })
    })
.catch(err => console.log(err));
};

exports.prevPoke = (req, res, next) => {
fetch(prevP)
    .then(res => res.json())
    .then(resData => 
    {   
        nextP = resData.next;
        prevP = resData.previous;
        res.render('pages/prove09/prove09', {
        title: 'Prove09', 
        path: 'prove09/prev',
        data: resData.results,
        hasPreviousPage: resData.previous,
        hasNextPage: resData.next
    })
    })
.catch(err => console.log(err)); 
};

exports.nextPoke = (req, res, next) => {  
fetch(nextP)
    .then(res => res.json())
    .then(resData => 
    {   
        nextP = resData.next;
        prevP = resData.previous;
        res.render('pages/prove09/prove09', {
        title: 'Prove09', 
        path: 'prove09/next',
        data: resData.results,
        hasPreviousPage: resData.previous,
        hasNextPage: resData.next
    })
    })
.catch(err => console.log(err)); 
};
    