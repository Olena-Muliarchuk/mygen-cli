import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, '..', 'dist', 'index.js');

try {
    if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf-8');
        const shebang = '#!/usr/bin/env node\n';

        if (!content.startsWith('#!/usr/bin/env node')) {
            fs.writeFileSync(indexPath, shebang + content, 'utf-8');
            console.log('Shebang added to dist/index.js');
        } else {
            console.log('Shebang already exists.');
        }

        fs.chmodSync(indexPath, 0o755);
        console.log('Permissions set to 755 (executable)');
    } else {
        console.warn('Warning: dist/index.js not found. Skipping shebang addition.');
    }
} catch (err) {
    console.error('Failed to add shebang:', err);
    process.exit(1);
}
