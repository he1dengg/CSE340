const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

async function run() {
    const sql = fs.readFileSync('setup.sql', 'utf8');
    await pool.query(sql);
    console.log("Tables created and data inserted successfully!");
    process.exit();
}
run();