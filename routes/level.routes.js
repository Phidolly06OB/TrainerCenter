import Router from "express"
import { borar, editar, getLevels, newLevel } from "../controllers/level.controller.js"

import { check } from "express-validator"
import validateDocuments from "../middleware/validateDocuments.js"
import validateJWT from "../middleware/validarJWT.js"
import isTrainerRol from "../middleware/validate.rolTrainer.js"
import isCamperRol from "../middleware/validar.rolCamper.js"

const router = Router()

router.get("/", getLevels)

router.delete("/:id",[
    validateJWT,
    isTrainerRol
], borar)

router.post("/",[
    validateJWT,
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('ruta', 'EL id de ruta es requerido').not().isEmpty(),
    check('ruta', 'EL tiempo de duracion es requerido').not().isEmpty(),
    validateDocuments
], newLevel)

router.patch("/:id",[
    validateJWT,
    isTrainerRol,
    isCamperRol
], editar)

export default router