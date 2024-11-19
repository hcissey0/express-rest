import { createRouter } from "../utils/route-wrapper.js";
import ExampleController from "../controllers/example.js";
import {auth} from "../middlewares/auth.js";


const exampleRouter = createRouter();

exampleRouter.use(auth); // Apply authentication middleware

exampleRouter.get('/', ExampleController.getAllExamples);

export default exampleRouter;