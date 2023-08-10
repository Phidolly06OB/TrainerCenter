import Router from "express"
import { borar, editar, getRoles, newRol } from "../controllers/roles.controller.js"

import { check } from "express-validator"
import validateDocuments from "../middleware/validateDocuments.js"

const router = Router()

router.get("/", getRoles)

router.delete("/:id", borar)

router.post("/",[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    validateDocuments
], newRol)

router.patch("/:id", editar)

export default router