import { User } from "../infra/entities/user.entities";
import { EntityNotFoundError, Repository } from "typeorm";


export default class UserServices {
    
    public constructor(
        private readonly userRepository: Repository<User>
    ){ }

    public async createUser(user: User) {

        return this.userRepository.save(user)
    }
    public async login(login: User) {
        const user = await this.userRepository.findOne({ where: { user: login.user } })
        if(!user){
            throw new EntityNotFoundError('user', 'user = ' + login.user)
        }else{
            return user.password === login.password
        }
    }

}

