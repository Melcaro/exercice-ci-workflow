const express = require('express');
const app = express();

const AdditionCtrl = require('./controllers/AdditionCtrl');

const PORT = process.env.PORT || 5001;

app.use('/', express.static(__dirname + '/../client/build'));

app.get('/api/v1', (req, res) => {
  const { val1, val2 } = req.query;

  res.json(AdditionCtrl.additionTwoValues(val1, val2));
});

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
