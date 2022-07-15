import { Router } from "express";

const favoritesVideosRoute = Router();
const favoritesVideosController = new FavoritesVideosController()

favoritesVideosRoute.post('/video/:video_id', favoritesVideosController.create)

export { favoritesVideosRoute }