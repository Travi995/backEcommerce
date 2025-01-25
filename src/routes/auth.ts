import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controler";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validateFields";
import { isNumber } from "../middlewares/isNumber";

export const routeAuth = Router()

routeAuth.post('/register',[
    check('email','el email es requerido').notEmpty().isEmail(),
    check('cell','el cell es obligatorio').notEmpty().isString(),
    check('password','el password se obligatorio y debe ser minimo de 8 caracteres').notEmpty().isString().isLength({min:8}),
    isNumber,
    validateFields
],registerUser)

routeAuth.post('/login',[
    check('cell','el cell es obligatorio').notEmpty().isString(),
    check('password','el password se obligatorio y debe ser minimo de 8 caracteres').notEmpty().isString().isLength({min:8}),
    isNumber,
    validateFields
],loginUser)

