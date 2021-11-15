import { Movement, Orientation } from '../../navigation';
import { RobotNavigator } from './RobotNavigator';
export class Robot {
  private navigator: RobotNavigator;
  constructor(public x = 0, public y = 0, public orientation = Orientation.North, public orders: Movement[]) {
    this.navigator = new RobotNavigator({ x, y }, orientation);
  }
  
  move() {
    const { position, orientation, } = this.navigator.move(this.orders);
    this.x = position.x;
    this.y = position.y;
    this.orientation = orientation;
  }

  static construct({ x, y, orientation, orders, }: { x: number, y: number, orientation: Orientation, orders: Movement[], }) {
    return new this(x, y, orientation, orders);
  }
}
