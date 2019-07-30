import { Member } from './member';
import { ShowTime } from './ShowTime';
import { Menu } from './menu';

export class OrderKey{
  orderId: number;
  member: Member;
  showTime: ShowTime;
  seatId: number;
  menu: Menu;
}