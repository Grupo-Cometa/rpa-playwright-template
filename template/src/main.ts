import { AbstractMain } from "client-rpa-orchestrator-ts";

export class Main extends AbstractMain
{
    async start(): Promise<void> {
        console.log("START")
    }
}