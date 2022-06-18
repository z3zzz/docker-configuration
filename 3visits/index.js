const express = require('express');
const { createClient } = require('redis');

const app = express();
const client = createClient({
  host: 'redis-server',
  port: 6379,
});

app.get('/', async (req, res) => {
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();

  try {
    const visits = (await client.get('visits')) || 1;

    res.send(`Number of visits: ${visits}`);

    await client.set('visits', parseInt(visits) + 1);
  } catch (e) {
    res.send(`There was an error: ${e}`);
  }
});

app.listen('5000', () => {
  console.log('app listening on http://34.64.252.61:5000');
});
