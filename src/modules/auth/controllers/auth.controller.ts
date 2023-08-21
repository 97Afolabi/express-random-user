import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";

@controller("/auth")
export class AuthController {
  @httpGet("/")
  hello(req: Request, res: Response) {
    try {
      return res.status(200).json({ message: "Hello" });
    } catch (error) {
      return res.status(400).json({ message: "Goodbye" });
    }
  }
}
