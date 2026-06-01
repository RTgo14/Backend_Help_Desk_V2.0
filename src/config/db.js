import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import dotenv from 'dotenv';

dotenv.config();

const dbPromise = open({
    filename: process.env.DB_FILE || './src/database/mesa_ayuda.sqlite',
    driver: sqlite3.Database
});

export default dbPromise;