import { Command } from 'commander';
import path from 'path';
import chalk from 'chalk';
import { createDirectory, createFile } from '../utils/file-system';
import { controllerTemplate, serviceTemplate, typesTemplate } from '../templates/resource'; // Adjust imports based on your structure

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
        .action((name: string) => {
            // Convert "user" -> "User"
            const pascalName = name.charAt(0).toUpperCase() + name.slice(1);
            const lowerName = name.toLowerCase();

            console.log(chalk.blue(`Generating Resource: ${pascalName}...`));

            // Target path: src/resources/<name>
            const targetDir = path.join(process.cwd(), 'src', 'resources', lowerName);

            const created = createDirectory(targetDir);
            if (!created) {
                console.error(chalk.red(`Resource "${lowerName}" already exists!`));
                process.exit(1);
            }

            try {
                createFile(targetDir, `${lowerName}.types.ts`, typesTemplate(pascalName));
                createFile(targetDir, `${lowerName}.service.ts`, serviceTemplate(pascalName));
                createFile(targetDir, `${lowerName}.controller.ts`, controllerTemplate(pascalName));

                console.log(chalk.green(`\n Resource generated successfully in: src/resources/${lowerName}/`));
            } catch (error) {
                console.error(chalk.red(' Critical error during generation.'), error);
                process.exit(1);
            }
        });
}