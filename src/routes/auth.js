import AuthController from "../controllers/auth.js";
import { createRouter } from "../utils/route-wrapper.js";


const authRouter = createRouter();

authRouter.post('/register', AuthController.register)

authRouter.post('/login', AuthController.login)

export default authRouter;