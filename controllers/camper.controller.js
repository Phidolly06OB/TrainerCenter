import { response } from "express";
import Camper from "../models/camper.js";
import bcrypt from "bcryptjs"


const getCampers = async (req, res=response) =>{
    try {
        const {hasta = 10, desde = 0} =req.query;

        const [total, campers] = await Promise.all([
            Camper.countDocuments(),
            Camper.find()
            .skip(Number(desde))
            .limit(Number(hasta))
        ])


        res.json({
            total,
            campers
        })
    } catch (error) {
        console.log(error);
    }
}

const borar = async (req, res) =>{
    try {
        await Camper.deleteOne({_id:req.params.id})

        res.send()
    } catch (error) {
        console.log(error);
    }
}

const newCamper = async (req, res)=>{
 /*    const {nombre,tipoIdentificacion, numeroIdentificacion, email, password, level, levelState, promedio} = req.body */
    try {
        const nuevoCentro = await new Camper(req.body)

        const {email, password} = nuevoCentro

        const emailExits = await Camper.findOne({email})
        if(emailExits){
            res.status(400).json({
                msg:"EL email ya existe"
            });
        }

        const salt = bcrypt.genSaltSync();
        nuevoCentro.password =bcrypt.hashSync(password, salt)


        nuevoCentro.save()

        res.json(nuevoCentro)

    } catch (error) {
        console.log(error);
    }
}

const editarCamper = async (req, res) =>{
    try {
        const editar = await Camper.findOneAndUpdate(
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
    getCampers,
    borar,
    newCamper,
    editarCamper
}
