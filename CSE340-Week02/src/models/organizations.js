import pool from '../database/connection.js';

export const getOrganizations = async () => {
    const result = await pool.query('SELECT * FROM organizations ORDER BY org_id');
    return result.rows;
};
