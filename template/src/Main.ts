import { InterfaceMain } from "client-rpa-orchestrator-ts";

export class Main implements InterfaceMain {
    async start(): Promise<void> {
        console.log("RPA Iniciado");
    }
}