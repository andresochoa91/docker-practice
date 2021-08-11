const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'andres',
    password : '',
    database : 'app1'
  }
});

// //Old way
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())

//New way
app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello amigos");
});


// app.get('/', (req, res) => {
//   db.select('*').from('users').then(data => {
//     res.status(200).send(data);
//   });
// });

// app.get('/:id', (req, res) => {
//   try {
//     db.select('*').from('users').where('id', req.params.id).then(data => {
//       if (data.length) {
//         res.status(200).send(data[0]);
//       } else {
//         res.status(404).send({ error: "user not found" });
//       }
//     });
//   } catch {
//     res.status(404).send({ error: "not found" });
//   }
// });

// app.post('/', (req, res) => {
//   db('users')
//   .insert(req.body)
//   .returning('*')
//   .then(data => {
//     res.send(data[0]);
//   })
//   .catch(console.error);  
// });

// app.put('/:id', (req, res) => {
//   db('users')
//   .where('id', req.params.id)
//   .update(req.body)
//   .returning('*')
//   .then(data => {
//     res.send(data[0]);
//   })
//   .catch(console.error);
// });

// app.delete('/:id', (req, res) => {
//   console.log(req.params.id)
//   db('users')
//   .where('id', req.params.id)
//   .del()
//   .then(() => res.send({ 'success': 'user deleted' }));
// });

app.listen(3000, () => {
  console.log("running in port 3000");
});