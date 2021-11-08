import { Command } from "commander";
import { init } from './modules/cli/infrastructure/init';
import { addRobot } from './modules/cli/infrastructure/add-robot';

const cli = new Command();

cli
  .command('init')
  .description('Initialise our Mars map coordinates expect 2 arguments, if not present it will be 50 50')
  .action(init);

cli
  .command('add-robot')
  .description('Initialise our Mars map coordinates')
  .action(addRobot);
