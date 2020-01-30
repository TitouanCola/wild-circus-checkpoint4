const express = require('express');
const connection = require('./config');

const voteRouter = express.Router();

voteRouter.get('/', (req, res) => {
  connection.query('SELECT * FROM voteRegion', (err, results) => {
    if (err) {
      throw err;
    } else {
      res.status(200).json(results);
    }
  });
});

voteRouter.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    console.log("1err");
    res.status(400).send('Missing an input field !'); // RETURNS AN ERROR IF THE FIELD IS MISSING
  } else {
    connection.query('SELECT regionName FROM voteRegion WHERE regionName = ?', [name], (err, rows) => {
      if (err) {
        res.sendStatus(400);
        throw err;
      } else if (rows.length > 0) {
        res.status(400).send('Region you typed already exist.'); // RETURNS AN ERROR IF THE REGION ALREADY EXISTS
      } else {
        connection.query('INSERT INTO voteRegion (regionName) VALUES (?)', [name], (err) => {
          if (err) {
            res.sendStatus(400);
            throw err;
          } else {
            res.status(200).send('Region successfuly added to the database !');
          }
        });
      }
    });
  }
});

// vote + 1
voteRouter.put('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).send('Missing an input field !');
  } else {
    connection.query('SELECT * FROM voteRegion WHERE regionName = ?', [name], (err, rows) => {
      if (err) {
        res.sendStatus(400);
        throw err;
      } else if (rows.length <= 0) {
        res.status(400).send('There is no item with this name !');
      } else {
        connection.query('UPDATE voteRegion SET voteCount = voteCount+1 WHERE regionName = ?', [name], (err) => {
          if (err) {
            res.sendStatus(400);
            throw err;
          } else {
            res.status(200).send('Vote successfuly counted');
          }
        });
      }
    });
  }
});

voteRouter.delete('/', (req, res) => {
  const { name } = req.body;
  console.log(req)
  connection.query('SELECT regionName FROM voteRegion WHERE regionName = ?', [name], (err, rows) => {
    if (err) {
      console.log("1err");
      res.sendStatus(400);
      throw err;
    } else if (rows.length <= 0) { // RETURNS AN ERROR IF NO ITEM HAS THE SELECTED NAME
      console.log("rowserr");
      res.status(400).send('There is no item with this name !');
    } else {
      connection.query('DELETE FROM voteRegion WHERE regionName = ?', [name], (err) => {
        if (err) {
          console.log("2err");
          res.sendStatus(400);
          throw err;
        } else {
          res.status(200).send('Region successfuly deleted from the database !');
        }
      });
    }
  });
});

module.exports = voteRouter;
