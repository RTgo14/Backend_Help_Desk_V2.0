import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import dbPromise from './config/db.js';
import incidenciaRoutes from './routes/incidencia.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/incidencias', incidenciaRoutes);

// Middleware global de errores
app.use(errorHandler);

// Levantar servidor e inicializar DB
app.listen(PORT, async () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
    try {
        const db = await dbPromise;
        const sqlScript = fs.readFileSync('database.sql', 'utf8');
        await db.exec(sqlScript);
        console.log('Base de datos SQLite lista y poblada con datos semilla.');
    } catch (error) {
        console.error('Error al inicializar SQLite:', error);
    }
});