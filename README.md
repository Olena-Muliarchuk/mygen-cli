# MyGen CLI

**MyGen** is a lightweight, extensible CLI tool for scaffolding TypeScript backend applications. It helps developers generate boilerplate code for resources, entities, and services instantly.

> Built with Node.js, TypeScript, Commander, and Chalk.

---

## Features

- **Modular Architecture**: Uses a plugin-based command system.
- **Strict Typing**: Generated code follows strict TypeScript guidelines.
- **Scaffolding**:
  - **Resources**: Generates Controller + Service + DTOs.
  - **Entities**: Generates TypeORM entities.

---

## Installation & Setup

Since this tool is written in TypeScript, you must compile it before linking it globally.

### 1. Install Dependencies

```bash
npm install
```

---

### 2. Build the Project

This compiles the TypeScript code into JavaScript inside the `dist/` folder.  
**Crucial step:** the global command relies on these compiled files.

```bash
npm run build
```

---

### 3. Link Globally

This registers the `mygen` command system-wide on your computer.

```bash
# (Optional) Remove old links if they exist
npm unlink -g my-cli-tool

# Create a new global link to the fresh build
npm link
```

---

### 4. Verification

Open a new terminal window, navigate to any other folder (e.g., Desktop), and try:

```bash
mygen --help
```

---

## Usage

### 1. Generate a Resource

Creates a full CRUD structure in `src/resources/<name>`.

```bash
mygen resource User
# or shorthand
mygen r User
```

**Output:**

```plaintext
src/resources/user/
├── user.controller.ts
├── user.service.ts
└── user.types.ts
```

---

### 2. Generate an Entity

Creates a database entity in `src/database/entities`.

```bash
mygen entity Product
# or shorthand
mygen e Product
```

**Output:**

```plaintext
src/database/entities/product.entity.ts
```

---

## Development

### Project Structure

```plaintext
src/
├── commands/         # Command logic (Business Logic)
├── templates/        # String templates for code generation
├── utils/            # Helper functions (File System, etc.)
└── index.ts          # Main entry point
```

---

### Scripts

- `npm start` — Run the CLI locally using ts-node (for testing during development).
- `npm run lint` — Check code quality with ESLint 9 (Flat Config).
- `npm run format` — Prettify the code.
- `npm run build` — Compile TypeScript to JavaScript (`dist/`).

---

## Adding a New Command

1. Create a new file in `src/commands/`, e.g. `docker.command.ts`.
2. Export a function `loadDockerCommand(program: Command)`.
3. Import and call this function in `src/index.ts`.
4. **Rebuild the project** to apply changes to the global command:
   ```bash
        npm run build
   ```

---

## License

ISC
