const express = require('express');
const app = express();
const dataController = require('./controllers/dataController');

app.set('view engine', 'ejs');
app.get('/', dataController.renderDataPage);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));