import { Router } from "express";
import { commentariesRoute } from "../../../../modules/commentaries/infra/http/routes/commentaries.routes";

const router = Router()

router.use("/commentary", commentariesRoute)

export { router }