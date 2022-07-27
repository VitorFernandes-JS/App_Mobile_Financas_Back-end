import { Router } from "express";
import { commentariesRoute } from "../../../../modules/commentaries/infra/http/routes/commentaries.routes";
import { usersRoute } from "../../../../modules/users/infra/http/routes/users.routes";
import { videosRoute } from "../../../../modules/videos/infra/http/routes/videos.routes";

const router = Router()

router.use("/users", usersRoute)
router.use("/commentarys", commentariesRoute)
router.use("/videos", videosRoute)

export { router }