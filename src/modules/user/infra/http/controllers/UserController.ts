import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUserService from "../../../services/CreateUserService";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({ name, email });

    return response.json(user);
  }
};

export default UserController;