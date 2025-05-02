import { InterfaceMain, Log } from "client-rpa-orchestrator-ts";
import App from "./app";

export class Main implements InterfaceMain {
    async start(): Promise<void> {
        await Log.write('success', 'Iniciando o processo de automação');
        await App.run();
        await Log.write('success', 'Finalizando o processo de automação');
    }
}