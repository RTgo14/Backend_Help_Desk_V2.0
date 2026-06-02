import db from '../config/db.js';

// GET ALL
export const getAll = async () => {
    const database = await db; // Esperamos a que la base de datos se conecte
    const query = `
        SELECT i.*, e.nombre as estado_nombre 
        FROM incidencias i 
        JOIN estados_incidencia e ON i.estado_id = e.id 
        ORDER BY i.id DESC
    `;
    // Usamos .all() para múltiples filas. No requiere desestructurar con [rows]
    const rows = await database.all(query); 
    return rows;
};

// GET BY ID
export const getById = async (id) => {
    const database = await db;
    const query = `
        SELECT i.*, e.nombre as estado_nombre 
        FROM incidencias i 
        JOIN estados_incidencia e ON i.estado_id = e.id 
        WHERE i.id = ?
    `;
    // Usamos .get() porque solo esperamos un resultado
    const row = await database.get(query, [id]); 
    return row;
};

// CREATE (POST)
export const create = async (data) => {
    const database = await db;
    const { titulo, descripcion, prioridad, fecha_reporte, area, estado_id } = data;
    const query = `INSERT INTO incidencias (titulo, descripcion, prioridad, fecha_reporte, area, estado_id) VALUES (?, ?, ?, ?, ?, ?)`;
    
    // Usamos .run() para modificaciones. Devuelve un objeto con lastID
    const result = await database.run(query, [titulo, descripcion, prioridad, fecha_reporte, area, estado_id]);
    return result.lastID; // Equivalente a insertId en mysql
};

// UPDATE (PUT)
export const update = async (id, data) => {
    const database = await db;
    const { titulo, descripcion, prioridad, area, estado_id } = data;
    const query = `UPDATE incidencias SET titulo = ?, descripcion = ?, prioridad = ?, area = ?, estado_id = ? WHERE id = ?`;
    
    // Usamos .run() y revisamos las filas afectadas con result.changes
    const result = await database.run(query, [titulo, descripcion, prioridad, area, estado_id, id]);
    return result.changes; // Equivalente a affectedRows en mysql
};

// DELETE
export const remove = async (id) => {
    const database = await db;
    const query = `DELETE FROM incidencias WHERE id = ?`;
    
    const result = await database.run(query, [id]);
    return result.changes; 
};