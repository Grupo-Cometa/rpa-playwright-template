import { AutomationContext } from './contexts/automation.context';
import handlerChain from './handlers/chain.bootstrap';
import { Log } from 'client-rpa-orchestrator-ts';
import { launchBrowser } from '../services/browser.service';

export default class App {
    static async run(): Promise<void> {
        const { browser, context, page } = await launchBrowser();

        const automationContext: AutomationContext = {
            page,
            context,
            browser,
        }

        try {
            await handlerChain.handle(automationContext);
        } catch (error) {
            if(error instanceof Error) {
                await Log.write('error', error.message);
            }
        } finally {
            await browser.close();
        }
    }
}