#!/usr/bin/env node
// @flow

const d = require("distraught");
const program = require("commander");

d.init({
  captureUncaught: true,
  captureUnhandled: true,
});

program
  .command("web")
  .description("start a web server")
  .action(() => {
    const web = require("./web");
    return web.startWebServer();
  });

program.parse(process.argv);
if (!process.argv.slice(2).length) {
  program.outputHelp();
  process.exit(1);
}
