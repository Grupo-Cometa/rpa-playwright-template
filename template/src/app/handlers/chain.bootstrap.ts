import EntryHandler from "./entry.handler";
import MiddleHandler from "./middle.handler";
import EndHandler from "./end.handler";

const entry = new EntryHandler();
const middle = new MiddleHandler();
const end = new EndHandler();

entry.setNext(middle).setNext(end);

export default entry;