import Router from "express"
import { borar, editarCamper, getCampers, newCamper } from "../controllers/camper.controller.js"

import { check } from "express-validator"
import validateDocuments from "../middleware/validateDocuments.js"
import isTrainerRol from "../middleware/validate.rolTrainer.js"
import validateJWT from "../middleware/validarJWT.js"
import isGerenteRol from "../middleware/validate.rolGerente.js"


const router = Router()

router.get("/", getCampers)

router.delete("/:id",[
    validateJWT,
    isGerenteRol
], borar)

router.post("/",[
    validateJWT,
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    check('tipoIdentificacion', 'Solo se permite T.I y C.C').not().isEmpty(),
    check('numeroIdentificacion', 'La identificacion es requerida').isLength({min: 10}),
    check('email', 'EL email es requerido').isEmail(),
    check('password', 'La contraseña es de minimo 8 caracteres').isLength({min: 8}),
    check('level', 'El id del level es requerido').not().isEmpty(),
    check('levelState', 'El level state es requeri, permitido: PENDIENTE y FINALIZADO').not().isEmpty(),
    check('promedio', 'EL promedio es requerido').not().isEmpty(),
    validateDocuments,
    isTrainerRol
], newCamper)

router.patch("/:id",[
    validateJWT,
    isGerenteRol,
    isTrainerRol,
], editarCamper)

export default router


