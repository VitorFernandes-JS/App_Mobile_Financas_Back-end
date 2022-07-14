import { Router } from "express";
import { CommentariesController } from "../controller/CommentariesController";

const commentariesRoute = Router();
const commentariesController = new CommentariesController()

commentariesRoute.post('/video/:video_id', commentariesController.create)

export { commentariesRoute }