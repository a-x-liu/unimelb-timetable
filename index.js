const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/test', (req, res) => {
  res.json("hello im from the backend");
  const customer = {
    name: "Newbie Co.",
    order_count: 0,
    address: "Po Box City",
  }
  console.log("hello2");
  const jsonString = JSON.stringify(customer)
  console.log(jsonString);
  fs.appendFile('./database.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);