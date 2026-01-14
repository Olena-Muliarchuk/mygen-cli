import { Command } from 'commander';
import path from 'path';
import chalk from 'chalk';
import { createDirectory, createFile } from '../utils/file-system.js';
import { validateName } from '../utils/validation.js';
import { handleError } from '../utils/errors.js';
import { htmlTemplate, cssTemplate, jsTemplate } from '../templates/frontend/index.js';

/**
 * Registers the 'init' command.
 * Scaffolds a basic Vanilla JS frontend project (index.html, style.css, script.js).
 *
 * @param program - The main Commander instance.
 */
export function loadInitCommand(program: Command) {
    program
        .command('init <name>')
        .alias('i')
        .description('Generate a basic Frontend boilerplate (HTML/CSS/JS)')
        .action((rawName: string) => {
            try {
                const name = validateName(rawName);

                console.log(chalk.blue(` Initializing frontend project: ${name}...`));

                const targetDir = path.join(process.cwd(), name);

                if (!createDirectory(targetDir)) {
                    throw new Error(`Directory "${name}" already exists!`);
                }


                createFile(targetDir, 'index.html', htmlTemplate(name));
                createFile(targetDir, 'style.css', cssTemplate());
                createFile(targetDir, 'script.js', jsTemplate());

                console.log(chalk.green(`\n Project ready at ./${name}`));
                console.log(chalk.white(` index.html`));
                console.log(chalk.white(` style.css`));
                console.log(chalk.white(` script.js`));

            } catch (error) {
                handleError(error);
            }
        });
}