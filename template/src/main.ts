import { InterfaceMain, Log } from "client-rpa-orchestrator-ts";

export class Main implements InterfaceMain {
    async start(): Promise<void> {

        console.log("START my")
        // await Log.write("info", "Info da bagaceira")
        // await Log.write("error", "Erro da bagaceira")
        // await Log.write("success", "Sucesso da bagaceira")
        // await Log.write("warning", "Alerta da bagaceira")
    }
}