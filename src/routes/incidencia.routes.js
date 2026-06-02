import { Router } from "express";
import {
    getIncidencias,
    getIncidenciaById,
    createIncidencia,
    updateIncidencia,
    deleteIncidencia,
} from "../controllers/incidencia.controller.js";
import { validarIncidencia } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/", getIncidencias);
router.get("/:id", getIncidenciaById);
router.post("/", validarIncidencia, createIncidencia);
router.put("/:id", validarIncidencia, updateIncidencia);
router.delete("/:id", deleteIncidencia);

export default router;
