import pool from '../database/connection.js';

export const getProjects = async () => {
    const result = await pool.query('SELECT * FROM projects ORDER BY project_id');
    return result.rows;
};
