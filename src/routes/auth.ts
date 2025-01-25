import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controler";
import { check } from "express-validator";

export const routeAuth = Router()

routeAuth.post('/register',[
    check('email','el email es requerido').notEmpty().isEmail(),
    check('cell','el cell es obligatorio').notEmpty().isString(),
    check('password','el password se obligatorio').notEmpty().isString()
],registerUser)

routeAuth.post('/login',[
    check('cell','el cell es obligatorio').notEmpty().isString(),
    check('password','el password se obligatorio').notEmpty().isString()
],loginUser)

