import {Request , Response, NextFunction} from "express";


export const Test =(req: Request,res: Response,next: NextFunction) =>{

// console.log("req",req);
    res.status(200).json({
        status:"just trying this "
    });
};