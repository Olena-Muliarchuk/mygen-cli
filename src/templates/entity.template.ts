export const entityTemplate = (name: string) => `import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ${name} {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
`;