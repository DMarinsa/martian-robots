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
    log(chalk.green.bold(`traveling finished at ${robot.x}, ${robot.y}`));
  });

  Config.clear();
};
