 require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/', indexRouter);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}