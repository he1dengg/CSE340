import pool from '../database/connection.js';

export const getUpcomingProjects = async () => {
  const query = `
    SELECT p.*, o.org_name 
    FROM projects p
    JOIN organizations o ON p.org_id = o.org_id
    ORDER BY p.project_date ASC
    LIMIT 5
  `;
  const result = await pool.query(query);
  return result.rows;
};

export const getProjectById = async (id) => {
  const query = `
    SELECT p.*, o.org_name 
    FROM projects p
    JOIN organizations o ON p.org_id = o.org_id
    WHERE p.project_id = $1
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

export const getProjectsByCategoryId = async (categoryId) => {
  const query = `
    SELECT p.*, o.org_name
    FROM projects p
    JOIN project_categories pc ON p.project_id = pc.project_id
    JOIN organizations o ON p.org_id = o.org_id
    WHERE pc.category_id = $1
    ORDER BY p.project_name ASC
  `;
  const result = await pool.query(query, [categoryId]);
  return result.rows;
};

export const getProjectsByOrganizationId = async (orgId) => {
  const query = `
    SELECT * 
    FROM projects 
    WHERE org_id = $1
    ORDER BY project_name ASC
  `;
  const result = await pool.query(query, [orgId]);
  return result.rows;
};
