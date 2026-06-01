-- Creación de la tabla
CREATE TABLE IF NOT EXISTS incidencias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    prioridad TEXT CHECK(prioridad IN ('Alta', 'Media', 'Baja')) NOT NULL,
    fecha_reporte TEXT NOT NULL,
    estado TEXT DEFAULT 'Abierto',
    area TEXT NOT NULL
);

-- Inserción de 5 registros semilla
INSERT OR IGNORE INTO incidencias (id, titulo, descripcion, prioridad, fecha_reporte, estado, area) VALUES
(1, 'Fallo de conexión WiFi', 'El router no asigna IPs a los equipos.', 'Alta', '2026-05-20', 'Abierto', 'Soporte Redes'),
(2, 'Monitor sin imagen', 'El monitor de la sala B no enciende.', 'Media', '2026-05-21', 'Abierto', 'Soporte Hardware'),
(3, 'Teclado dañado', 'Faltan teclas en el equipo del módulo 4.', 'Baja', '2026-05-18', 'Resuelto', 'Soporte Hardware'),
(4, 'Error en software contable', 'Error 500 al generar reporte mensual.', 'Alta', '2026-05-22', 'En progreso', 'Desarrollo de Software'),
(5, 'Impresora atascada', 'La impresora principal tiene papel atascado.', 'Media', '2026-05-23', 'Abierto', 'Soporte General');