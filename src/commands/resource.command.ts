import { Command } from 'commander';
import path from 'path';
import chalk from 'chalk';
import { createDirectory, createFile } from '../utils/file-system.js';
import { validateName, toPascalCase } from '../utils/validation.js';
import { handleError } from '../utils/errors.js';
import { controllerTemplate, serviceTemplate, typesTemplate } from '../templates/resource/index.js';

/**
 * Registers the 'resource' command to the Commander program.
 *
 * Scaffolds a complete backend resource including:
 * - Controller
 * - Service
 * - Types/Interfaces
 *
 * @param program - The main Commander instance.
 */
export function loadResourceCommand(program: Command) {
    program
        .command('resource <name>')
        .alias('r')
        .description('Generate a Resource (Controller, Service, Types)')
        .action((rawName: string) => {
            // Convert "user" -> "User"
            const name = validateName(rawName);
            const pascalName = toPascalCase(name);
            const fileName = name.toLowerCase();

            console.log(chalk.blue(`Generating Resource: ${pascalName}...`));

            // Target path: src/resources/<name>
            const targetDir = path.join(process.cwd(), 'src', 'resources', fileName);

            const created = createDirectory(targetDir);
            if (!created) {
                console.error(chalk.red(`Resource "${fileName}" already exists!`));
                process.exit(1);
            }

            try {
                createFile(targetDir, `${fileName}.types.ts`, typesTemplate(pascalName));
                createFile(targetDir, `${fileName}.service.ts`, serviceTemplate(pascalName));
                createFile(targetDir, `${fileName}.controller.ts`, controllerTemplate(pascalName));

                console.log(chalk.green(`\n Resource generated successfully in: src/resources/${fileName}/`));
            } catch (error) {
                handleError(error);
            }
        });
}