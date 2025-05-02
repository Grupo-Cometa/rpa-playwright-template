import { AutomationContext } from '../contexts/automation.context';

export default abstract class AbstractHandler {

  private nextHandler: AbstractHandler | null = null;

  public setNext(handler: AbstractHandler): AbstractHandler {
    this.nextHandler = handler;
    return handler;
  }

  protected async next(context: AutomationContext): Promise<AutomationContext> {
    if (this.nextHandler) return await this.nextHandler.handle(context);
    
    return context;
  }

  public abstract handle(context: AutomationContext): Promise<AutomationContext>;
}