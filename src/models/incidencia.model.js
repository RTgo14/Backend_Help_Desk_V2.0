import dbPromise from '../config/db.js';

export const getAllIncidencias = async () => {
    const db = await dbPromise;
    return await db.all('SELECT * FROM incidencias ORDER BY id DESC');
};