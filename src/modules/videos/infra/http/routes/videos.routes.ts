import { Router } from "express";
import { VideosController } from "../controller/VideosController";

const videosRoute = Router()
const videosController = new VideosController()

videosRoute.post('/', videosController.create)

export { videosRoute }