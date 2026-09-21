import pool from '../database/connection.js';

export const getAllCategories = async () => {
    const result = await pool.query('SELECT * FROM categories ORDER BY category_id');
    return result.rows;
};
