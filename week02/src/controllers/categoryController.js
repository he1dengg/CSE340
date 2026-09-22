import { getAllCategories, getCategoryById } from '../models/categories.js';
import { getProjectsByCategoryId } from '../models/projects.js';

export const showCategories = async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.render('categories', {
      title: 'Categories',
      categories
    });
  } catch (error) {
    next(error);
  }
};

export const showCategoryDetail = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const category = await getCategoryById(categoryId);

    if (!category) {
      return res.status(404).render('404', { title: '404 - Category Not Found' });
    }

    const projects = await getProjectsByCategoryId(categoryId);

    res.render('category-detail', {
      title: category.category_name,
      category,
      projects
    });
  } catch (error) {
    next(error);
  }
};
