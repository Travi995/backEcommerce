import  bcrypt  from 'bcryptjs';
import { Request, Response } from "express";
import { User } from "../entities/user";
import { hashPass } from "../helpers/hashPass";
import { generateToken } from '../helpers/generateToken';




export const registerUser = async (req:Request, res:Response )=>{
    try {
        const {email,cell,password} = req.body

        const user = User.create({
            cell,
            email,
            password:hashPass(password)
        })
        await user.save()
        res.status(201).json({message:"user created correctly"})

    } catch (error) {
        res.status(500).json({message:"error server"})
        
    }
}

export const loginUser = async (req:Request, res:Response)=>{
    try {
        const {cell,password} = req.body
        const user = await  User.findOneBy({cell})
        if(user){
            const isPasswordCorrect =  bcrypt.compareSync(password, user.password)
            if(isPasswordCorrect){
                const token = generateToken({id:user.id,cell:user.cell})
                res.status(200).json({message:"user logged in","token":token})
            }
            res.status(401).json({message:"password or cell incorrect"})
            
        }else{
            res.status(404).json({message:"user not found"})
        }
    }catch(error){
        res.status(500).json({message:"error server"})
    }
    
    
}