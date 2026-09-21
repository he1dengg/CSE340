import pool from '../database/connection.js';

export const getAllOrganizations = async () => {
  const result = await pool.query('SELECT * FROM organizations ORDER BY org_name ASC');
  return result.rows;
};

export const getOrganizationById = async (id) => {
  const result = await pool.query('SELECT * FROM organizations WHERE org_id = $1', [id]);
  return result.rows[0];
};
