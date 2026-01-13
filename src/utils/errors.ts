import chalk from 'chalk';

/**
 * Centralized error handler for the CLI.
 * Logs the error message in red and terminates the process with exit code 1.
 *
 * @param error - The caught error (can be an Error object or unknown).
 */
export function handleError(error: unknown): never {
    if (error instanceof Error) {
        console.error(chalk.red(`\n Error: ${error.message}\n`));
    } else {
        console.error(chalk.red(`\n Unknown error: ${String(error)}\n`));
    }
    process.exit(1);
}