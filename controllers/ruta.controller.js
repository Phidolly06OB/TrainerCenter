import { response } from "express";
import Ruta from "../models/ruta.js";

const getRutas = async (req, res= response) =>{
    try {

        const {hasta = 2, desde = 0} =req.query;

        const [total, rutas] = await Promise.all([
            Ruta.countDocuments(),
            Ruta.find() 
            .skip(Number(desde))
            .limit(Number(hasta))
        ])

        

        res.json({
            total,
            rutas
        })
    } catch (error) {
        console.log(error);
    }
}

const borar = async (req, res) =>{
    try {
        await Ruta.deleteOne({_id:req.params.id})

        res.send()
    } catch (error) {
        console.log(error);
    }
}

const newRuta = async (req, res)=>{
    try {
        const nuevaRuta = await new Ruta(req.body)
        nuevaRuta.save()

        res.json(nuevaRuta)

    } catch (error) {
        console.log(error);
    }
}

const editar = async (req, res) =>{
    try {
        const editar = await Ruta.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
            )

        res.json(editar)
    } catch (error) {
        console.log(error);
    }
}

export{
    getRutas,
    borar,
    newRuta,
    editar
}
