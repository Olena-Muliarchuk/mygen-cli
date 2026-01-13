/**
 * Validates the resource name.
 * Ensures it starts with a letter and contains only alphanumeric characters or underscores.
 *
 * @param name - The raw input string from the CLI.
 * @returns {string} The trimmed, valid name.
 * @throws {Error} If the name is empty or invalid.
 */
export function validateName(name: string): string {
    if (!name || name.trim().length === 0) {
        throw new Error('Name cannot be empty');
    }

    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(name)) {
        throw new Error('Name must start with a letter and contain only letters, numbers, and underscores');
    }

    return name.trim();
}

/**
 * Converts a string to PascalCase (e.g., "user_profile" -> "UserProfile").
 * Used for class names and types.
 *
 * @param name - The input string (camelCase, snake_case, or with spaces).
 * @returns {string} The PascalCase string.
 */
export function toPascalCase(name: string): string {
    return name
        .replace(/[-_ ]+(\w)/g, (_, char) => char.toUpperCase())
        .replace(/^\w/, (char) => char.toUpperCase());
}