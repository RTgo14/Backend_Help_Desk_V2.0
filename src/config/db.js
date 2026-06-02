import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import dotenv from 'dotenv';

dotenv.config();

// Abrimos la conexión y configuramos la base de datos inmediatamente
const dbPromise = open({
    filename: process.env.DB_FILE || './src/database/mesa_ayuda.sqlite',
    driver: sqlite3.Database
}).then(async (db) => {
    
    // 1. Crear las tablas si no existen (IF NOT EXISTS previene errores si ya están creadas)
    await db.exec(`
        CREATE TABLE IF NOT EXISTS estados_incidencia (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS incidencias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            descripcion TEXT NOT NULL,
            prioridad TEXT NOT NULL,
            fecha_reporte TEXT NOT NULL,
            area TEXT,
            estado_id INTEGER,
            FOREIGN KEY(estado_id) REFERENCES estados_incidencia(id)
        );
    `);

    // 2. Poblar la tabla de estados si está vacía (para que tengas datos para tu JOIN)
    const row = await db.get('SELECT COUNT(*) as count FROM estados_incidencia');
    if (row.count === 0) {
        await db.exec(`
            INSERT INTO estados_incidencia (nombre) VALUES 
            ('Abierto'), 
            ('En Progreso'), 
            ('Resuelto'), 
            ('Cerrado');
        `);
        console.log("Tablas creadas y estados iniciales insertados.");
    }

    return db;
});

export default dbPromise;