import {EntityRepository, Repository} from "typeorm"
import { User } from "../entities/User"

@EntityRepository(User)
class UsersReposities extends Repository<User> {

}

export {UsersReposities}
