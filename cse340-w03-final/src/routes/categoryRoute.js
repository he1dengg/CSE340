import express from 'express';
import { showCategories, showCategoryDetail } from '../controllers/categoryController.js';

const router = express.Router();
router.get('/categories', showCategories);
router.get('/category/:id', showCategoryDetail);

export default router;
