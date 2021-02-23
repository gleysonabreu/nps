import { getRepository, Repository } from "typeorm";
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";
import IUserRepository from "../../../repositories/IUserRepository";
import User from "../entities/User";

class UserRepository implements IUserRepository{
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  async create(user: ICreateUserDTO): Promise<User> {
    const createUser = this.ormRepository.create(user);
    await this.ormRepository.save(createUser);

    return createUser;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ email });
    return user;
  }
};

export default UserRepository;