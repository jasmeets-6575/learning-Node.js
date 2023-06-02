import { RequestHandler } from "express"

export const getAllProductsStatic:RequestHandler = async (req,res) =>{
    throw new Error("testing async errors")
    res.status(200).json({msg:"products testing route"})
}
export const getAllProducts:RequestHandler  = async (req,res) =>{
    res.status(200).json({msg:"products route"})
}
