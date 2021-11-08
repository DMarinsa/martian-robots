import { Point, Orientation, Movement } from '../../navigation';

export class RobotNavigator {
  private movementManagerStrategy: Map<Movement, Function> = new Map();

  private movementDictionary: Record<Orientation, Function>;
  private turnLeftDictionary: Record<Orientation,Orientation>;
  private turnRightDictionary: Record<Orientation,Orientation>;

  constructor(public location: Point, public orientation: Orientation) {
    this.movementManagerStrategy.set(Movement.Left, this.turnLeft);
    this.movementManagerStrategy.set(Movement.Right, this.turnRight);
    this.movementManagerStrategy.set(Movement.Forward, this.moveForward);
    this.movementDictionary = {
      [Orientation.North]: this.moveNorth,
      [Orientation.South]: this.moveSouth,
      [Orientation.East]: this.moveEast,
      [Orientation.West]: this.moveWest,
    }
    this.turnRightDictionary = {
      [Orientation.North]: Orientation.East,
      [Orientation.South]: Orientation.West,
      [Orientation.East]: Orientation.South,
      [Orientation.West]: Orientation.North,
    }
    this.turnLeftDictionary = {
      [Orientation.North]: Orientation.West,
      [Orientation.South]: Orientation.East,
      [Orientation.East]: Orientation.North,
      [Orientation.West]: Orientation.South,
    }
  }

  public move(instructions: Movement[]) {
    instructions.forEach(instruction => {
      const movement = this.movementManagerStrategy.get(instruction);
      if(!movement) {
        throw new Error('unknown movement');
      }
      movement(this);
    })
    return {
      position: this.location,
      orientation: this.orientation,
    };
  }

  private moveNorth(self: this) {
    self.location.y++;
  };
  private moveSouth(self: this) {
    self.location.y--;
  };
  private moveEast(self: this) {
    self.location.x++;
  };
  private moveWest(self: this) {
    self.location.y--;
  };

  private turnLeft(self: this) {
    self.orientation = self.turnLeftDictionary[self.orientation];
  }

  private turnRight(self: this) {
    self.orientation = self.turnRightDictionary[self.orientation];
  }

  private moveForward(self: this) {
    const movement = self.movementDictionary[self.orientation];
    movement(self);
  }
}
