import { User } from '../model/user.model';
import { MOCKUSER } from './mock/user.mock';

export class UserService {

    private currentUser: User = MOCKUSER[0];

    public getUser(): User {
        return this.currentUser;
    }

}