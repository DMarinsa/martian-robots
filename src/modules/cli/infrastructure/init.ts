import { Mars } from "../../mars/domain/Mars";
import chalk from "chalk";
import { log } from "../../../infrastructure/log";
import { Config } from "../../../infrastructure/persistence/Config";

export const init = (x: string, y: string) => {
  Config.clear();
  const xCoordinate = Number.parseInt(x) || 50;
  const yCoordinate = Number.parseInt(y) || 50;
  const mars = new Mars(xCoordinate, yCoordinate);

  log(chalk.red.bold(`Mars planet generated with furthest point on [${mars.finalXCoordinate}, ${mars.finalYCoordinate}]`));

  Config.set('mars', mars);
};
