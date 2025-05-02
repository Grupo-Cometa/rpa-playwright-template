import '../src/helpers/env.helper';
import { Bootstrap } from "client-rpa-orchestrator-ts";
import { Main } from "../src/main";

const bootstrap = new Bootstrap(new Main);
bootstrap.run();