const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World! I am learning node')
});

const users = [
  { id:0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01878765423'},
  { id:1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01878765423'},
  { id:2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '01878765423'},
  { id:3, name: 'Shuchorita', email: 'Shuchorita@gmail.com', phone: '01878765423'},
  { id:4, name: 'Purnima', email: 'Purnima@gmail.com', phone: '01878765423'}
]

app.get('/users', (req, res) => {
  const search = req.query.search;
  if(search){
    const searchResult = users.filter( user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  }
  else{
    res.send(users);
  }
});

// app.method
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post', req.body)
  res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users [id];
  res.send(user)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})