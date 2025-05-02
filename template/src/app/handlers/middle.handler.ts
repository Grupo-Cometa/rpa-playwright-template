import AbstractHandler from './abstract.handler';
import { AutomationContext } from '../contexts/automation.context';

export default class MiddleHandler extends AbstractHandler {

    public async handle(context: AutomationContext): Promise<AutomationContext> {

        return this.next(context);
    }
}