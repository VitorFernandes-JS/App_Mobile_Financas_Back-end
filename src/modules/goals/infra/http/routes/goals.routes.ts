import { Router } from "express";
import { GoalsController } from "../controller/GoalsController";

const goalsRoute = Router()
const goalsController = new GoalsController()

goalsRoute.post('/', goalsController.create)

export { goalsRoute }