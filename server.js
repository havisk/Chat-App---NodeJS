const express = require('express');

const app = express();


app.use(express.static(__dirname));

let messages = [
  {name: 'Kool', message: 'you are fast'},
  {name: 'Namari', message: 'Hi Daddy'}
];

app.get('/messages', (req, res) => {
  res.send(messages)
});




let server = app.listen(3000, () => {
  console.log('server is listening on port ', server.address().port)
});