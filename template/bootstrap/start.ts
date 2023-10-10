import { Start } from "client-rpa-orchestrator-ts"
import { Main } from "../src/Main";
import { platform } from "os";
import { join } from 'path';

let path = join(process.cwd(), '.env');

if(platform() == 'linux')  path = '/var/www/.env';

require('dotenv').config({ path: path });

const args = process.argv;

(async () => {
    if (process.env.DEBUG == 'true') return await (new Main).start()

    if (args.length < 3) throw "Obrigatória a passagem do argumento {sheduleid}";
    const start = new Start(new Main)
    await start.execute(args[2])
})()