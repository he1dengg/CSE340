import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(dirname, 'views'));

const renderHome = async (req, res) => {
  res.render('index', { title: 'Home' });
};

const renderOrganizations = async (req, res) => {
  res.render('organizations', { title: 'Organizations' });
};

const renderProjects = async (req, res) => {
  res.render('projects', { title: 'Projects' });
};

const renderCategories = async (req, res) => {
  const categoryList = [
    'Environmental',
    'Educational',
    'Community Service',
    'Health and Wellness'
  ];
  res.render('categories', {
    title: 'Categories',
    categories: categoryList
  });
};

app.get('/', renderHome);
app.get('/organizations', renderOrganizations);
app.get('/projects', renderProjects);
app.get('/categories', renderCategories);

app.use(async (req, res) => {
  res.status(404).render('index', { title: '404 - Not Found' });
});

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startServer();
