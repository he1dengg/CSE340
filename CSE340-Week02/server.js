import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllCategories } from './src/models/categories.js';
import { getOrganizations } from './src/models/organizations.js';
import { getProjects } from './src/models/projects.js';

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
  try {
    const data = await getOrganizations();
    res.render('organizations', { title: 'Organizations', orgs: data });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

const renderProjects = async (req, res) => {
  try {
    const data = await getProjects();
    res.render('projects', { title: 'Projects', projects: data });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

const renderCategories = async (req, res) => {
  try {
    const data = await getAllCategories();
    res.render('categories', { title: 'Categories', categories: data });
  } catch (error) {
    res.status(500).send('Server Error');
  }
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
