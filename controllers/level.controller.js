import { response } from "express";
import Level from "../models/level.js";

const getLevels = async (req, res= response) =>{
    try {

        const {hasta = 5, desde = 0} =req.query;

        const [total, levels] = await Promise.all([
            Level.countDocuments(),
            Level.find() 
            .skip(Number(desde))
            .limit(Number(hasta))
        ])

        

        res.json({
            total,
            levels
        })
    } catch (error) {
        console.log(error);
    }
}

const borar = async (req, res) =>{
    try {
        await Level.deleteOne({_id:req.params.id})

        res.send()
    } catch (error) {
        console.log(error);
    }
}

const newLevel = async (req, res)=>{
    try {
        const nuevoLevel = await new Level(req.body)
        nuevoLevel.save()

        res.json(nuevoLevel)

    } catch (error) {
        console.log(error);
    }
}

const editar = async (req, res) =>{
    try {
        const editar = await Level.findOneAndUpdate(
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
    getLevels,
    borar,
    newLevel,
    editar

}
