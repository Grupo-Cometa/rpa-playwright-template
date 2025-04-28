import { join } from 'path';
import { existsSync } from 'fs';

let path = join(process.cwd(), '.env');

if (!existsSync(path)) {
  path = '/var/www/.env';
}

require('dotenv').config({ path });
