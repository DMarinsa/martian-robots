import chalk from "chalk";
import { log } from "../../../infrastructure/log";
import { Config } from "../../../infrastructure/persistence/Config";
import { Robot } from "../../robot/domain/Robot";

export const trable = () => {
  log(chalk.green.bold('Initialising travel'));

  const robots = Config.get('robots') as Robot[];

  robots.forEach(robot => robot.move());

  Config.clear();
};
