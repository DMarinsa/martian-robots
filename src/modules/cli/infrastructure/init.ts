import { Mars } from "../../mars/domain/Mars";
import chalk from "chalk";
import { log } from "../../../infrastructure/log";
import { Config } from "../../../infrastructure/persistence/Config";

export const init = (input: string[]) => {
  const coordinates = input;
  const x = Number.parseInt(coordinates[0]) || 50;
  const y = Number.parseInt(coordinates[1]) || 50;
  const mars = new Mars(x, y);

  log(chalk.red.bold(`Mars planet generated with furthest point on [${mars.finalXCoordinate}, ${mars.finalYCoordinate}]`));

  Config.set('mars', mars);
};
