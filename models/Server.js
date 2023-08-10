import express from "express";
import cors from "cors"
import conectarDB from "../config/conectarDB.js";

import routerCentro from "../routes/centros.routes.js"
import routerRoles from "../routes/roles.routes.js"
import routerLevels from "../routes/level.routes.js"
import routerRutas from "../routes/rutas.routes.js"
import routerCampers from "../routes/campers.routes.js"
import routerUsuarios from "../routes/usuarios.routes.js"
import routerLogin from "../routes/login.routes.js"

class Server{

    constructor(){
        this.app = express();
        this.mongoDB()
        this.port = process.env.PORT


        this.centroPatch = "/api/centros"
        this.rolPatch = "/api/roles"
        this.levelPatch = "/api/levels"
        this.rutaPatch = "/api/rutas"
        this.camperPatch = "/api/campers"
        this.usuarioPatch = "/api/usuarios"
        this.loginPatch = "/api/login"

        this.middleware();

        this.routes();


    }

    middleware(){
        this.app.use(express.json());
        this.app.use(cors())
    }

    async mongoDB(){
        await conectarDB()
    }

    routes(){
        this.app.use(this.centroPatch, routerCentro)
        this.app.use(this.rolPatch, routerRoles)
        this.app.use(this.levelPatch, routerLevels)
        this.app.use(this.rutaPatch, routerRutas)
        this.app.use(this.camperPatch, routerCampers)
        this.app.use(this.usuarioPatch, routerUsuarios)
        this.app.use(this.loginPatch, routerLogin)
    }


    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Conectado al puerto ${this.port}`);
        })
    }

}

export default Server