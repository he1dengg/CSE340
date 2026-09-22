import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import homeRoute from './src/routes/homeRoute.js';
import categoryRoute from './src/routes/categoryRoute.js';
import projectRoute from './src/routes/projectRoute.js';
import organizationRoute from './src/routes/organizationRoute.js';

dotenv.config();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

app.use('/', homeRoute);
app.use('/', categoryRoute);
app.use('/', projectRoute);
app.use('/', organizationRoute);

app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found' });
});

app.use((err, req, res, next) => {
  res.status(500).render('500', { title: '500 - Server Error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
