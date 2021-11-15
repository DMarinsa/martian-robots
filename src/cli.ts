import { createCommand } from "commander";
import { init } from './modules/cli/infrastructure/init';
import { addRobot } from './modules/cli/infrastructure/add-robot';
import { clear } from './modules/cli/infrastructure/clear';
import { starts } from './modules/cli/infrastructure/starts';

const cli = createCommand();


cli
  .command('init <x> [y]')
  .description('Initialise our Mars map coordinates expect 2 arguments, if not present it will be 50 50')
  .action(init);

cli
  .command('add-robot <x> <y> <orientation> <orders>')
  .description('Initialise our Mars map coordinates')
  .action(addRobot);

cli
  .command('clear')
  .description('Clears the whole state')
  .action(clear);

cli
  .command('travel')
  .description('Initialise travel')
  .action(starts);

cli.parse(process.argv);
