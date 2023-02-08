console.log("OK");
const express = require('express');
const cors_proxy = require('cors-anywhere');



const app = express();

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

app.get('/apiresturant/Restaurants', async (_req, res) => {
  const url = 'http://144.91.86.203/apiresturant/Restaurants';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: 'An error occurred'});
  }
});

app.get('/apiresturant/Customers', async (_req, res) => {
  const url = 'http://144.91.86.203/apiresturant/Customers?rid=0';

  try {
    const response = await fetch(url);

    if (!response.ok) {
    //   throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return res.json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: 'An error occurred'});
  }
});
const host = process.env.HOST || '0.0.0.0';

// Listen on a specific port via the PORT environment variable
const port = 3456;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
  })
  .listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });
// const port = ;

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`),
);

  