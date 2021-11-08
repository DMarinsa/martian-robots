import { Movement, Orientation } from '../../navigation';
import { RobotNavigator } from './RobotNavigator';
export class Robot {
  private navigator: RobotNavigator;
  constructor(public x = 0, public y = 0, public orientation = Orientation.North) {
    this.navigator = new RobotNavigator({ x, y }, orientation);
  }
  
  move(actions: Movement[]) {
    const { position, orientation, } = this.navigator.move(actions);
    this.x = position.x;
    this.y = position.y;
    this.orientation = orientation;
  }
}
