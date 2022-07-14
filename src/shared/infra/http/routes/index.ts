import { Router } from "express";
import { commentariesRoute } from "../../../../modules/commentaries/infra/http/routes/commentaries.routes";
import { videosRoute } from "../../../../modules/videos/infra/http/routes/videos.routes";

const router = Router()

router.use("/commentary", commentariesRoute)
router.use("/video", videosRoute)

export { router }