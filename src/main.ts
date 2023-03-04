#!/usr/bin/env node
import { Command } from "commander";
import command from "./scripts/command";

const program = new Command();

program
  .name("Example scripts")
  .description("A collection of example scripts.")
  .version("0.1.0");

program.command("command").description("Testing command.").action(command);

program.parse();
