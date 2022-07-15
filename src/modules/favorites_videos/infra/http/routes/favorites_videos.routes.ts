import { Router } from "express";
import { FavoritesVideosController } from "../controller/FavoritesVideosController";

const favoritesVideosRoute = Router();
const favoritesVideosController = new FavoritesVideosController()

favoritesVideosRoute.post('/video/:video_id', favoritesVideosController.create)

export { favoritesVideosRoute }