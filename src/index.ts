#!/usr/bin/env node
/**
 * Main Entry Point for MyGen CLI.
 * Registers all available commands and parses arguments.
 */
import { Command } from 'commander';
import { loadResourceCommand } from './commands/resource.command.js';
import { loadEntityCommand } from './commands/entity.command.js';
import { loadInitCommand } from './commands/init.command.js';

const program = new Command();

program
    .name('mygen')
    .description('My Custom Backend Generator')
    .version('1.0.0');

loadResourceCommand(program);
loadEntityCommand(program);
loadInitCommand(program);


program.parse(process.argv);