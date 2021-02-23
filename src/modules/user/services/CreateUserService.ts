import { inject, injectable } from "tsyringe";
import AppError from "../../../shared/errors/AppError";
import IUserRepository from "../repositories/IUserRepository";

interface IRequest {
  name: string;
  email: string;
};

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ name, email }: IRequest) {
    const findUserByEmail = await this.userRepository.findByEmail(email);
    if (findUserByEmail) throw new AppError('This user already exists.');

    const user = await this.userRepository.create({ name, email });
    return user;
  }
};

export default CreateUserService;