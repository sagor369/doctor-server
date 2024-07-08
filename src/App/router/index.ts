import { Router } from "express"
import { UserRoute } from "../modules/user/router"


const router = Router()
const RouterModle = [
    {
        path: "/",
        route: UserRoute
    }
]

RouterModle.forEach(rout => router.use(rout.path, rout.route))
export default router