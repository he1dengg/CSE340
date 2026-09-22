import pool from '../database/connection.js';

export const getAllCategories = async () => {
  const result = await pool.query('SELECT * FROM categories ORDER BY category_name ASC');
  return result.rows;
};

export const getCategoryById = async (id) => {
  const result = await pool.query('SELECT * FROM categories WHERE category_id = $1', [id]);
  return result.rows[0];
};

export const getCategoriesByProjectId = async (projectId) => {
  const query = `
    SELECT c.* 
    FROM categories c
    JOIN project_categories pc ON c.category_id = pc.category_id
    WHERE pc.project_id = $1
    ORDER BY c.category_name ASC
  `;
  const result = await pool.query(query, [projectId]);
  return result.rows;
};
