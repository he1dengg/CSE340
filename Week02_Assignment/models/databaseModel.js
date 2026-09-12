const pool = require('../database/connection');

async function getOrganizations() { 
    const res = await pool.query('SELECT * FROM organizations'); 
    return res.rows; 
}
async function getProjects() { 
    const res = await pool.query('SELECT * FROM projects'); 
    return res.rows; 
}
async function getCategories() { 
    const res = await pool.query('SELECT * FROM categories'); 
    return res.rows; 
}

module.exports = { getOrganizations, getProjects, getCategories };