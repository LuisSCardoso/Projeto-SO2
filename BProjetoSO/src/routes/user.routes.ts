import UserController from "../controllers/user.controller";
import { Router } from "express";
import { User } from "../infra/entities/user.entities";
import UserServices from "../services/user.service";
import appDataSource from "../infra/datasource";

const userRouter = Router()

const service = new UserServices(appDataSource.getRepository(User))
const controller = new UserController(service)

userRouter.post('/create', async (req, res) => {
    await controller.createUserController(req, res)
})

userRouter.post('/login', async (req, res) => {
    await controller.loginController(req, res)
})

export default userRouter