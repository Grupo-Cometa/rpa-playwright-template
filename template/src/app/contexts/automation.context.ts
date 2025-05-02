import { Browser, BrowserContext, Page } from 'playwright';

export interface AutomationContext {
    browser: Browser;
    context: BrowserContext;
    page: Page;
}