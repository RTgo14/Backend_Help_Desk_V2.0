# Documentación del API: Módulo de Incidencias (CRUD)

## Endpoints Disponibles
URL Base: `http://localhost:3000/api/incidencias`

| Método | Endpoint | Acción |
| :--- | :--- | :--- |
| `GET` | `/` | Lista todas las incidencias y sus estados. |
| `GET` | `/:id` | Muestra el detalle de una incidencia específica. |
| `POST` | `/` | Crea una nueva incidencia. |
| `PUT` | `/:id` | Actualiza la información de una incidencia existente. |
| `DELETE` | `/:id` | Elimina una incidencia por su ID. |

## Validaciones Implementadas (POST / PUT)
Para asegurar la integridad de la base de datos, el backend cuenta con un middleware de validación que exige:
1. `titulo`: Obligatorio, mínimo 5 caracteres.
2. `descripcion`: Obligatorio, mínimo 10 caracteres.
3. `prioridad`: Obligatorio, solo acepta valores 'Alta', 'Media', 'Baja'.
4. `area`: Obligatorio, no puede estar vacío.
5. `estado_id`: Obligatorio, debe ser numérico y válido (1, 2 o 3).

## Ejemplo de Respuesta Exitosa (GET /:id)
```json
{
  "success": true,
  "message": "Detalle de incidencia",
  "data": {
    "id": 1,
    "titulo": "Fallo de conexión WiFi",
    "descripcion": "El router no asigna IPs a los equipos.",
    "prioridad": "Alta",
    "fecha_reporte": "2026-05-20",
    "area": "Soporte Redes",
    "estado_id": 1,
    "estado_nombre": "Abierto"
  }
}
```
## Ejemplo de Respuesta de Error (Validación fallida en POST)
```json
{
  "success": false,
  "message": "Errores de validación",
  "errors": [
    "El título es obligatorio y debe tener al menos 5 caracteres.",
    "La prioridad debe ser 'Alta', 'Media' o 'Baja'."
  ]
}
```
