const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Маршрут за замовчуванням (root endpoint)
app.get('/', (req, res) => {
  res.send('Hello World! Azure is working fine!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
