import { Command } from 'commander';
import path from 'path';
import chalk from 'chalk';
import { createDirectory, createFile } from '../utils/file-system.js';
import { validateName, toPascalCase } from '../utils/validation.js';
import { handleError } from '../utils/errors.js';
import { entityTemplate } from '../templates/entity.template.js';

export function loadEntityCommand(program: Command) {
    program
        .command('entity <name>')
        .alias('e')
        .description('Generate a TypeORM Entity')
        .action((rawName: string) => {
            const name = validateName(rawName);
            const pascalName = toPascalCase(name);
            const fileName = name.toLowerCase();

            console.log(chalk.yellow(`Generating Database Entity: ${pascalName}...`));

            const targetDir = path.join(process.cwd(), 'src', 'database', 'entities');

            createDirectory(targetDir);

            try {
                createFile(targetDir, `${fileName}.entity.ts`, entityTemplate(pascalName));
                console.log(chalk.green(`Entity created at src/database/entities/${fileName}.entity.ts`));
            } catch (e) {
                handleError(e);
            }
        });
}