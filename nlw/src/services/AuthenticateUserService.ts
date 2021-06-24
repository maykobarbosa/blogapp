import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign  } from "jsonwebtoken"
import { UsersReposities } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string,
    password: string
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){
        const userRepository = getCustomRepository(UsersReposities)
        ///verificar se email existe
        const user = await userRepository.findOne({
            email
        })

        if(!user){
            throw new Error("E-mail ou senha incorreta!")
        }

        ///verificar se senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("E-mail ou senha incorreta!")
        }
        //gerar token
        const token = sign({
            email: user.email
        },  "e547a102e84c16b040e014e709aa3071",{ ///maykonode em md5 é a palavra secreta
            subject : user.id,
            expiresIn: "1d",
        });
        return token;

    }
}

export { AuthenticateUserService}