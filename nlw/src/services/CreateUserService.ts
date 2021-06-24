import {getCustomRepository } from "typeorm";
import { UsersReposities } from "../repositories/UsersRepositories"
import {hash} from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string,
    admin?: boolean,  /// a ? representa que o campo é opcional
    password: string
}

class CreateUserService {

    async execute({name, email, admin, password } : IUserRequest){
        const userRepository =  getCustomRepository (UsersReposities);

        if(!email){
            throw new Error("E-mail incorreto!");
        }
        
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists) {
            throw new Error("Usuário já existe!");
        }

        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        });

        await userRepository.save(user);

        return user;
    }

}

export { CreateUserService }