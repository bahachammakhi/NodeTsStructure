import {Request , Response, NextFunction} from "express";

/**
 * @api {get} /api/test/:id Request a test route
 * @apiVersion 0.1.0
 * @apiName Test
 * @apiGroup Test
 * @apiPermission none
 * @apiParam {Number} id The test-ID.
 * @apiSuccess {String} status Just trying this.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 * @apiError (500 Internal Server Error) InternalServerError The server encountered an internal error
 * @apiDescription Compare version 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.
 */
export const Test =(req: Request,res: Response,next: NextFunction) =>{

// console.log("req",req);
    res.status(200).json({
        status:"just trying this "
    });
};