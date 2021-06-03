const express = require('express');
const bodyParser = require('body-parser')
const dataBase = require('../dataBase')
const dbConecton = require('../dataBase/dogs.js')


const app = express();
const port = process.env.PORT || 2252;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

app.get('/api/dogs', (_, res) => {
  dbConecton.getAll((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });
});

// // get the dog by name
// app.get('/dogsList/:name', (req, res) => {
//   // get the name and description from request body
//   const { name, description } = req.params;
//   // filter through dogsList find first mutch and return user back
//   const dog = dogsList.filter((dog) => dog.name === name)[0];
//   res.json({ ok: true, dog });
// });


// // Get rout with url dogsList and send back a list of dogsList as recent data
// app.get('/dogsList', (_, res) => {
//   res.json({ ok: true, dogsList});
// });


// add dogsList POST request
app.post('/api/dogs', (req, res) => {
  // get the name and description from request body
  const { name, description } = req.body;
  // check if name and description exist, add to dogs dsts base and send back list of dogs as a response
  if( name && description ) {
    dbConecton.create({name, description}, (err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.send(results);
      }
    });
  } else {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});
