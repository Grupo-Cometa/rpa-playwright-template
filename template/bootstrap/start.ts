import { Start } from "client-rpa-orchestrator-ts"
import { Main } from "../src/Main";
import 'dotenv/config';

const args = process.argv;

(async () => {
    if (process.env.DEBUG == 'true') return await (new Main).start()

    if (args.length < 3) throw "Obrigatoria a passagem do argumento {sheduleid}";
    const start = new Start(new Main)
    await start.executionShedule(parseInt(args[2]))
})()