/**
 * Generates the content for an Express Controller class.
 *
 * @param name - The PascalCase name of the resource (e.g., "User").
 * @returns {string} The raw TypeScript code.
 */
export const controllerTemplate = (name: string) => `import { Request, Response } from 'express';
import { ${name}Service } from './${name.toLowerCase()}.service';

export class ${name}Controller {
    constructor(private service: ${name}Service) {}

    async create(req: Request, res: Response) {
        const result = await this.service.create(req.body);
        res.json(result);
    }
}
`;