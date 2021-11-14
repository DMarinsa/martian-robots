import chalk from "chalk";
import { log } from "../../../infrastructure/log";
import { Config } from "../../../infrastructure/persistence/Config";

export const clear = () => {
  log(chalk.blueBright.bold('Database cleared, you\'re free to go'));

  Config.clear();
};
