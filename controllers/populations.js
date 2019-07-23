const express = require('express');
const router = express.Router();
const Population = require('../models/populations');

router.get('/', (req, res) => {
  Population.find({}, (err, foundPopulations) => {
    if(err) {
      res.send(err);
    } else {
      res.render('populations/index.ejs', {
        populations: foundPopulations
      })
    }
  })
})


router.get('/new', (req, res) => {
  res.render('populations/new.ejs')
})


router.get('/:id/edit', (req, res) => {
  Population.findById(req.params.id, (err, foundPopulation) => {
    if(err){
      res.send(err);
    } else {
      res.render('populations/edit.ejs', {
        population: foundPopulation
      })
    }
  })
})

router.put('/:id', (req, res) => {
  Population.findByIdAndUpdate(req.params.id, req.body, (err, updateResponse)=> {
    if(err){
      res.send(err);
    } else {
      res.redirect('/populations/' + req.params.id)
    }
  })
})

router.get('/:id', (req, res) => {
  Population.findById(req.params.id, (err, foundPopulation) => {
    if(err){
      res.send(err);
    } else {
      res.render('populations/show.ejs', {
        population: foundPopulation
      })
    }
  })
})

router.delete('/:id', (req, res) =>{
  Population.findOneAndDelete(req.params.id, (err, response) =>{
    if(err) {
      res.send(err);
    } else{
      res.redirect('/populations');
    }
  })
})



router.post('/', (req, res) => {
  Population.create(req.body, (err, createdPopulation) =>{
    if(err) {
      res.send(err);
    } else {
      res.redirect('/populations')
    }
  })
})



module.exports = router;

