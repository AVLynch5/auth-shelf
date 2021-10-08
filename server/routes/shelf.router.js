const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated, } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log('req.user:', req.user);
  pool.query(`SELECT * FROM "item";`)
  .then((results) => res.send(results.rows))
  .catch((error) => {
    console.log('Error making GET request:', error);
    res.sendStatus(500);
  });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  const user = req.user.id;
  const payload = req.body;
  const queryText = `INSERT INTO "item" ("description", "image_url", "user_id") VALUES ($1, $2, $3);`;
  pool.query(queryText, [payload.description, payload.image_url, user])
  .then((response) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('ERROR POSTING TO DB', error);
    res.sendStatus(500);
  })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
