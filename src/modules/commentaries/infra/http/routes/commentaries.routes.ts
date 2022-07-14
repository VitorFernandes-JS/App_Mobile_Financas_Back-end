import { Router } from "express";
import { CommentariesController } from "../controller/CommentariesController";

const commentariesRoute = Router();
const commentariesController = new CommentariesController()

commentariesRoute.post('/', commentariesController.create)

export { commentariesRoute }