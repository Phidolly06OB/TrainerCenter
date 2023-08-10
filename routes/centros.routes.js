import Router from "express"
import { borar, editarCentro, getCentros, newCentro } from "../controllers/centro.controller.js"

import { check } from "express-validator"
import validateDocuments from "../middleware/validateDocuments.js"
import validateJWT from "../middleware/validarJWT.js"
import isGerenteRol from "../middleware/validate.rolGerente.js"


const router = Router()

router.get("/", getCentros)

router.delete("/:id",[
    validateJWT
], borar)

router.post("/",[
    validateJWT,
    isGerenteRol,
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('descripcion', 'La descripcion es requerida').not().isEmpty(),
    check('ciudad', 'La ciudad es requerida').not().isEmpty(),
    validateDocuments
], newCentro)

router.patch("/:id",[
    validateJWT
], editarCentro)

export default router