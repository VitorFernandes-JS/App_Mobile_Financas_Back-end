import { Router } from "express";
import { UsersController } from "../controller/UsersController";

const usersRoute = Router();
const usersController = new UsersController()

usersRoute.post('/', usersController.create)
usersRoute.post('/authenticate', usersController.authenticate)

export { usersRoute }
