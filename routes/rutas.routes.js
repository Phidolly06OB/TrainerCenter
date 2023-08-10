import Router from "express"
import { borar, editar, getRutas, newRuta } from "../controllers/ruta.controller.js"

import { check } from "express-validator"
import validateDocuments from "../middleware/validateDocuments.js"
import validateJWT from "../middleware/validarJWT.js"
import isGerenteRol from "../middleware/validate.rolGerente.js"
import isTrainerRol from "../middleware/validate.rolTrainer.js"

const router = Router()

router.get("/", getRutas)

router.delete("/:id",[
    validateJWT,
    isGerenteRol,
], borar)

router.post("/",[
    check('nombre', 'EL nombre es Obligatorio').not().isEmpty(),
    validateDocuments
], newRuta)

router.patch("/:id",[
    validateJWT,
    isTrainerRol
], editar)

export default router