const express = require('express');
const connection = require('./config');

const voteRouter = express.Router();

// vote + 1
voteRouter.put('/:id', (req, res) => {
  const { question, response } = req.body;
  const itemId = res.req.params.id;
  if (!question || !response) {
    res.status(400).send('Missing an input field !');
  } else {
    connection.query(`SELECT id FROM faq WHERE id = ${itemId}`, (errSelectPut, rowsSelectPut) => {
      if (errSelectPut) {
        res.sendStatus(400);
        throw errSelectPut;
      } else if (rowsSelectPut.length <= 0) {
        res.status(400).send('There is no item with this id !');
      } else {
        connection.query(`UPDATE faq SET question = '${question}', response = '${response}' WHERE id = ${itemId}`, (errPut) => {
          if (errPut) {
            res.sendStatus(400);
            throw errPut;
          } else {
            res.status(200).send('Q/A successfuly modified in the database !');
          }
        });
      }
    });
  }
});

module.exports = voteRouter;
