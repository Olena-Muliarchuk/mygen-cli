/**
 * Generates the content for a TypeScript Interface and DTOs.
 *
 * @param name - The PascalCase name of the resource (e.g., "User").
 * @returns {string} The raw TypeScript code.
 */
export const typesTemplate = (name: string): string => `export interface I${name} {
    id: string;
    createdAt: Date;
}

export interface Create${name}Dto {
    // TODO: Add properties
}
`;