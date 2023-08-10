import { validationResult } from "express-validator"

const validateDocuments = (req, res, next) =>{
    try {
        const errores = validationResult(req)
        if(!errores.isEmpty()){
            return res.status(400).json(errores)
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

export default validateDocuments