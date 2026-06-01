export const validarIncidencia = (req, res, next) => {
    const { titulo, descripcion, prioridad, area, estado_id } = req.body;
    const errores = [];

    if (!titulo || titulo.trim().length < 5) errores.push("El título es obligatorio y debe tener al menos 5 caracteres.");
    if (!descripcion || descripcion.trim().length < 10) errores.push("La descripción es obligatoria y debe tener al menos 10 caracteres.");
    if (!['Alta', 'Media', 'Baja'].includes(prioridad)) errores.push("La prioridad debe ser 'Alta', 'Media' o 'Baja'.");
    if (!area || area.trim().length === 0) errores.push("El área es obligatoria.");
    if (![1, 2, 3].includes(Number(estado_id))) errores.push("El estado_id es inválido (1=Abierto, 2=En progreso, 3=Resuelto).");

    if (errores.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Errores de validación",
            errors: errores
        });
    }

    next(); // Si todo está bien, pasa al controlador
};