import express from 'express';
import { showProjects, showProjectDetail } from '../controllers/projectController.js';

const router = express.Router();
router.get('/projects', showProjects);
router.get('/project/:id', showProjectDetail);

export default router;
