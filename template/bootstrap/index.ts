import { Bootstrap } from "client-rpa-orchestrator-ts";
import { Main } from "../src/Main";
import 'dotenv/config';

const bootstrap = new Bootstrap(new Main)
bootstrap.run();
