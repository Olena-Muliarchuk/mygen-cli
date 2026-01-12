import { Command } from 'commander';
import path from 'path';
import chalk from 'chalk';
import { createDirectory, createFile } from '../utils/file-system';
import { entityTemplate } from '../templates/entity.template';

export function loadEntityCommand(program: Command) {
    program
        .command('entity <name>')
        .alias('e')
        .description('Generate a TypeORM Entity')
        .action((name: string) => {
            const pascalName = name.charAt(0).toUpperCase() + name.slice(1);
            const fileName = name.toLowerCase();

            console.log(chalk.yellow(`Generating Database Entity: ${pascalName}...`));

            const targetDir = path.join(process.cwd(), 'src', 'database', 'entities');


            createDirectory(targetDir);


            try {
                createFile(targetDir, `${fileName}.entity.ts`, entityTemplate(pascalName));
                console.log(chalk.green(`Entity created at src/database/entities/${fileName}.entity.ts`));
            } catch (e) {
                console.log(e);
                process.exit(1);
            }
        });
}