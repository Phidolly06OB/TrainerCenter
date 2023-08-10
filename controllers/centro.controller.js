import { response } from "express";
import Centro from "../models/centro.js";


const getCentros = async (req, res=response) =>{
    try {
        const {hasta = 3, desde = 0} =req.query;

        const [total, roles] = await Promise.all([
            Centro.countDocuments(),
            Centro.find()
            .skip(Number(desde))
            .limit(Number(hasta))
        ])


        res.json({
            total,
            roles
        })
    } catch (error) {
        console.log(error);
    }
}

const borar = async (req, res) =>{
    try {
        await Centro.deleteOne({_id:req.params.id})

        res.send()
    } catch (error) {
        console.log(error);
    }
}

const newCentro = async (req, res)=>{
    try {
        const nuevoCentro = await new Centro(req.body)
        nuevoCentro.save()

        res.json(nuevoCentro)

    } catch (error) {
        console.log(error);
    }
}

const editarCentro = async (req, res) =>{
    try {
        const editar = await Centro.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
        )

        res.json(editar)
    } catch (error) {
        console.log(error);
    }
}

export {
    getCentros,
    borar,
    newCentro,
    editarCentro
}