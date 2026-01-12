import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

/**
 * Safely creates a directory if it does not exist.
 * Uses recursive creation (like `mkdir -p`).
 *
 * @param dirPath - The absolute path to the directory.
 * @returns {boolean} Returns `true` if created, `false` if it already exists.
 */
export const createDirectory = (dirPath: string): boolean => {
    if (fs.existsSync(dirPath)) {
        return false;
    }
    fs.mkdirSync(dirPath, { recursive: true });
    return true;
};

/**
 * Creates a file with the specified content.
 * 
 * @param dirPath - The directory where the file should be created.
 * @param fileName - The name of the file (e.g., 'user.service.ts').
 * @param content - The string content to write into the file.
 * @throws Will throw an error if the file system operation fails.
 */
export const createFile = (dirPath: string, fileName: string, content: string): void => {
    const filePath = path.join(dirPath, fileName);

    try {
        fs.writeFileSync(filePath, content);
        console.log(chalk.white(`Created: ${fileName}`));
    } catch (error) {
        console.error(chalk.red(`Error creating ${fileName}`), error);
        throw error;
    }
};