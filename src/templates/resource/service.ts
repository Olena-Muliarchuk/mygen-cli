
/**
 * Generates the content for a Business Logic Service class.
 *
 * @param name - The PascalCase name of the resource (e.g., "User").
 * @returns {string} The raw TypeScript code.
 */
export const serviceTemplate = (name: string) => `import { I${name}, Create${name}Dto } from './${name.toLowerCase()}.types';

export class ${name}Service {
    private items: I${name}[] = [];

    async create(data: Create${name}Dto): Promise<I${name}> {
        return {
            id: '1',
            createdAt: new Date(),
            ...data
        } as I${name};
    }
}
`;