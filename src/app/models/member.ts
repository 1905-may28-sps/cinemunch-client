import { MembershipType } from './membershipType';
import { Movies } from './movies';
import { Menu } from './menu';

export class Member {
    id: number;
    firstName: string;
    lastName: string;
    dob: string;
    email: string;
    username: string;
    password: string;
    membershipType: MembershipType;
    movie: Movies;
    menu: Menu;
}