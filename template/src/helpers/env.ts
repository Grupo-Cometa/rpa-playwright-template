import { platform } from "os";
import { join } from 'path';

let path = join(process.cwd(), '.env');

if(platform() == 'linux')  path = '/var/www/.env';

require('dotenv').config({ path: path });