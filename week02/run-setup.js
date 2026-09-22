import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from './src/database/connection.js';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const runSetup = async () => {
  try {
    let sql = fs.readFileSync(path.join(dirname, 'src', 'setup.sql'), 'utf8');
    sql = sql.replace(/^\uFEFF/, '').trim();
    await pool.query(sql);
    console.log('DATABASE SETUP SUCCESSFUL');
  } catch (error) {
    console.error('DATABASE SETUP ERROR:', error);
  } finally {
    await pool.end();
    process.exit();
  }
};

runSetup();
