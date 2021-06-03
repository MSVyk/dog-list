const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 2252;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/', (req, res, next) => {
//   console.log('Request Url:', req.url);

//   var conection = mysql.createConnection( {
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "cowsDB",
//     port: 2005
//   });
//   conection.query("CREATE TABLE cowTable(id INT, Cow varchar(20), Description varchar(100)", (err, rows) => {
//     if (err) {
//       throw err;
//     } else {
//       consol.log('Table created', rows);
//     }
//   });
//   next();
// })

const cowsList = [{name: 'Milkshake', description: 'weega weega weega'}, {name: 'Booba', description: 'blah blah blah'}];

app.get('/', (_, res) => {
  res.send('cowsList!')
});

// get the cow by name
app.get('/cowsList/:name', (req, res) => {
  //##################
  // conection.query("SELECT * from cowTable", (err, rows) => {
  //   if (err) {
  //     throw err;
  //   } else {
  //     consol.log(rows);
  //   }
  // });
  //##################
  // get the name and description from request body
  const { name, description } = req.params;
  // filter through cowsList find first mutch and return user back
  const cow = cowsList.filter((cow) => cow.name === name)[0];
  res.json({ ok: true, cow });
});


// Get rout with url cowsList and send back a list of cowsList as recent data
app.get('/cowsList', (_, res) => {
  res.json({ ok: true, cowsList});
});



// add cowsList POST request
app.post('/addCow', (req, res) => {
  // get the name and description from request body
  const { name, description } = req.body;
  // check if name and description exist, push to cowsList list and send back list of cowsList as a response
  if( name && description ) {
    user.push({name, description });
    res.json({ ok: true, cowsList });
  }
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});
