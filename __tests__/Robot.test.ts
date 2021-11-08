import { Movement, Orientation } from "../src/modules/navigation";
import { Robot } from "../src/modules/robot/domain/Robot";

describe(Robot, () => {
  it('should initialise a Robot', () => {
    const result = new Robot(0, 0, Orientation.North);

    expect(result).toBeInstanceOf(Robot);
  });

  it('should starts at a given position and orientation', () => {
    const result = new Robot(0, 0, Orientation.North);

    expect(result.x).toBe(0);
    expect(result.y).toBe(0);
    expect(result.orientation).toBe(Orientation.North);
  });

  it('should starts at [0, 0, "N"] if no position was given', () => {
    const result = new Robot(0, 0, Orientation.North);

    expect(result.x).toBe(0);
    expect(result.y).toBe(0);
    expect(result.orientation).toBe(Orientation.North);
  });

  it('should move forward', () => {
    const robot = new Robot(0, 0, Orientation.North);

    robot.move([ Movement.Forward ]);

    expect(robot.x).toBe(0);
    expect(robot.y).toBe(1);
    expect(robot.orientation).toBe(Orientation.North);
  });
});
