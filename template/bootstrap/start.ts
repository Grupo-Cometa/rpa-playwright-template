import '../src/helpers/env.helper';
import { Start } from "client-rpa-orchestrator-ts";
import { Main } from "../src/main";

const args = process.argv;

(async () => {
    if (process.env.DEBUG == 'true') return await (new Main).start();

    if (args.length < 3) throw "Obrigatória a passagem do argumento {sheduleid}";
    const start = new Start(new Main);
    await start.execute(args[2]);
})()