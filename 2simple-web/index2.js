const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('Node2 there')
})

app.listen('5000', () => {
  console.log(
    'app listening on http://ec2-52-79-62-94.ap-northeast-2.compute.amazonaws.com:3000'
  );
});
