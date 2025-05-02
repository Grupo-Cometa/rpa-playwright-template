import { chromium, Browser, Page, BrowserContext } from 'playwright';

export async function launchBrowser(): Promise<{
    browser: Browser;
    context: BrowserContext;
    page: Page;
}> {
    const browser = await chromium.launch({ headless: (process.env.DEBUG === 'true') ? false : true });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    page.setDefaultTimeout(60000);

    return { browser, context, page };
}