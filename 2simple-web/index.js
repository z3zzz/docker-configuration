const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Be there')
})

app.listen('8080', () => {
  console.log("8080 listening")
})
