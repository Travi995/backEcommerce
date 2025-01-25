import jwt from "jsonwebtoken";
import "dotenv/config";
import { itfPayloadJWT } from "../interfaces/generic";

export const generateToken = (data:itfPayloadJWT) => {
    const payload = {
        ...data
    }

    return  jwt.sign(payload, process.env.SECRETORPUBLICKEY as string,{expiresIn:'2d'})
}