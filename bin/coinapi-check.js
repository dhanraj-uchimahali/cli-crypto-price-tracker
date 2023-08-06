const program = require("commander");
const check = require("../commands/check");
program
  .command("price")
  .description("Check price of coins")
  .option('--coin <type>','Add coin type in specific format for eg: ETH etc.','BTC')
  .option('--cur <currency>','Change the currency','INR')
  .action((cmd) => check.price(cmd));

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}
