import chalk from "chalk";
import { log } from "../../../infrastructure/log";
import { Config } from "../../../infrastructure/persistence/Config";
import { Movement, Orientation } from "../../navigation";
import { Robot } from "../../robot/domain/Robot";

export const addRobot = (x: string, y: string, orientation: Orientation, orders: string) => {
  const xCoordinate = Number.parseInt(x) || 0;
  const yCoordinate = Number.parseInt(y) || 0;
  const actions = orders.split('') as Movement[];

  let robots = Config.get('robots') as Robot[];

  if (!robots) {
    robots = [];
  }
  

  const robot = new Robot(xCoordinate, yCoordinate, orientation, actions);
  robots.push(robot);
  log(chalk.gray.bold(`Robot created`));

  Config.set('robots', robots);
};
