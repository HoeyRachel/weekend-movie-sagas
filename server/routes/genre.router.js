const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//req.params property is an object containing properties mapped to the named route "parameters"
//get call routed to id to make available as req.params.id
router.get('/:id', (req, res) => {

  console.log ('req', req.params);
  //define what the query is 
  const query = `SELECT genres.name
  FROM movies_genres 
  JOIN genres ON genres.id = movies_genres.genre_id
  JOIN movies on movies.id = movies_genres.movie_id
  WHERE movies_genres.movie_id = ${req.params.id};`;

  pool.query(query)
    .then(result => {
      console.log(results.rows);
      res.send(results.rows);
    }).catch
    (err => {
      console.log ('ERROR: Get all genres', err);
      res.sendStatus(500)
    })

});

module.exports = router;