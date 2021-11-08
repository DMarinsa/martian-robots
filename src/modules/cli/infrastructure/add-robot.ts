import chalk from "chalk";
import { log } from "../../../infrastructure/log";
import { Config } from "../../../infrastructure/persistence/Config";
import { Orientation } from "../../navigation";
import { Robot } from "../../robot/domain/Robot";

export const addRobot = (input: string[]) => {
    const x = Number.parseInt(input[0]) || 50;
    const y = Number.parseInt(input[1]) || 50;
    const orientation = input[2] as Orientation;

    let robots = Config.get('robots') as Robot[];

    if (!robots) {
      robots = [];
    }
  
    const robot = new Robot(x, y, orientation);
    robots.push(robot);
    log(chalk.gray.bold(`Robot created`));
  
    Config.set('robots', robots);
};
