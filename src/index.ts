#!/usr/bin/env node
import { Command } from 'commander';
import { loadResourceCommand } from './commands/resource.command';
import { loadEntityCommand } from './commands/entity.command';

const program = new Command();

program
    .name('mygen')
    .description('My Custom Backend Generator')
    .version('1.0.0');

loadResourceCommand(program);
loadEntityCommand(program);


program.parse(process.argv);