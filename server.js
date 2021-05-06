const express = require('express');
const app = express();

app.use('/', express.static('./build'));

app.get('/api/test', (req, res) => {
  res.json({
    api: true,
  });
});

app.listen(3000);
