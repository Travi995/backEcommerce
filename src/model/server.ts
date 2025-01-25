import express,{ Application } from "express"
import cors from 'cors'
import { stdUrl } from "../helpers/stdUrl"
import { db } from "../db/db"
import { routeAuth } from "../routes/auth"
export class Server {
    public app : Application
    public port: number
    public pathAuth: string

    constructor(){
        this.app =  express(),
        this.port = parseInt(process.env.PORT || "3000")
        this.pathAuth= stdUrl("auth")

        this.loadDb()
        this.middleaware()
        this.routes()
    }


    async loadDb(){
        try {
            await db.initialize()
            console.log("Base de datos cargada")
        } catch (error) {
            console.log("Error al cargar la base de datos",error)
        }
    }

    middleaware(){

        //habilitacion del cors
        this.app.use(cors())

        //informacion via json
        this.app.use(express.json())

        //servir la carpeta public
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.pathAuth,routeAuth)

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}