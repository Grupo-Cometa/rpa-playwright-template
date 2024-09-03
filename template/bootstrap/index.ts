import 'dotenv/config';
import { Bootstrap } from "client-rpa-orchestrator-ts";
import { Main } from "../src/Main";

const bootstrap = new Bootstrap(new Main);
bootstrap.run();