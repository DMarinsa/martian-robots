import chalk from "chalk";
import { log } from "../../../infrastructure/log";
import { Config } from "../../../infrastructure/persistence/Config";

export async function checkPlanetExistence() {
  const mars = Config.get('mars');
  if (!mars) {
    log(chalk.bgRedBright.yellowBright.bold(`Planet not initialised`));
    throw new Error('Planet not initialised');
  }
}
