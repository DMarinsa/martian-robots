import chalk from "chalk";
import { log } from "../../../infrastructure/log";
import { Config } from "../../../infrastructure/persistence/Config";
import { Robot } from "../../robot/domain/Robot";
import { checkPlanetExistence, } from '../domain/checkPlanetExistence'

export const starts = async () => {
  await checkPlanetExistence();
  
  log(chalk.green.bold('Initialising travel'));

  const robotDtos = Config.get('robots') as Robot[];

  const robots = robotDtos.map(robot => Robot.construct(robot));

  robots.forEach(robot => {
    robot.move()
    if (robot.x > 0 || robot.y > 0) {
      log(chalk.red.bold(`robot lost at ${robot.x}, ${robot.y}`));
      return;
    }
    log(chalk.green.bold(`traveling finished at ${robot.x}, ${robot.y}`));
  });

  Config.clear();
};
