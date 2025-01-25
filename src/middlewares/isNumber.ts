import { NextFunction, Request, Response } from "express"


export const isNumber = (req:Request,res:Response,next:NextFunction)=>{
    const {cell} = req.body
    if( !isNaN(parseInt(cell))){
        throw new Error("Por favor el Numero de telefono no es valido, debe ser un numero")
    }else{
        return true
    }

}