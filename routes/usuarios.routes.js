import Router from "express"
import { getUsuarios, newUser } from "../controllers/usuario.controller.js"
import { check } from "express-validator"
import validateDocuments from "../middleware/validateDocuments.js"


const router = Router()

router.get("/", getUsuarios)

router.post("/", [
    check('nombre', 'Es requerido el nombre').not().isEmpty(),
    check('email', 'el email es requerido').isEmail(),
    check('password', 'the password is requiered').not().isEmpty(),
    validateDocuments
], newUser)

export default router