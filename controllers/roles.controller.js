import { response } from "express";
import Roles from "../models/roles.js";

const getRoles = async (req, res= response) =>{
    try {

        const {hasta = 8, desde = 0} =req.query;

        const query = {estado:true}

        const [total, roles] = await Promise.all([
            Roles.countDocuments(),
            Roles.find() //.populate('usuario', ['nombre', 'email'])
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
        await Roles.deleteOne({_id:req.params.id})

        res.send()
    } catch (error) {
        console.log(error);
    }
}

const newRol = async (req, res)=>{
    try {
        const nuevoRol = await new Roles(req.body)
        nuevoRol.save()

        res.json(nuevoRol)

    } catch (error) {
        console.log(error);
    }
}

const editar = async (req, res) =>{
    try {
        const editar = await Roles.findOneAndUpdate(
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
    getRoles,
    borar,
    newRol,
    editar
}