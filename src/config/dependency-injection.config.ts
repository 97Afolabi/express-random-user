import { Container } from "inversify";
import { AuthController } from "../modules/auth/controllers/auth.controller";

const container = new Container();
container.bind<AuthController>(AuthController).toSelf();

export default container;
