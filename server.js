const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

let messages = [
  {name: 'Kool', message: 'you are fast'},
  {name: 'Namari', message: 'Hi Daddy'}
];

app.get('/messages', (req, res) => {
  res.send(messages)
});

app.post('/messages', (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});



let server = app.listen(3000, () => {
  console.log('server is listening on port ', server.address().port)
});