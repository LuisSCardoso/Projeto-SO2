import { Request, Response } from "express";
import UserServices from "../services/user.service";
import { QueryFailedError } from "typeorm";

export default class UserController {

    public constructor(
        private readonly userServices: UserServices
    ){ }

    public async createUserController(req: Request, res: Response) {
        const { user, password } = req.body
        if(!user || !password) return res.sendStatus(400)
        try {
            await this.userServices.createUser(req.body)
            res.sendStatus(201)
        } catch(error) {
            console.error(error)
            if (error instanceof QueryFailedError && error.message.includes('Duplicate entry')) {
                return res.sendStatus(409)
            }
            return res.status(500).send(error)
        }
    }

    public async loginController(req: Request, res: Response) {
        const { user, password } = req.body
        if(!user || !password) return res.sendStatus(400)
        try{
            const login = await this.userServices.login(req.body)
            if(login){
                return res.sendStatus(200)
            }else{
                return res.sendStatus(401)
            }
        } catch(error) {

        }
    }
}