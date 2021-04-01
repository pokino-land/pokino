import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getMeReadyText(): Promise<string> {
    return element(by.className('playerMe')).getText();
  }
  
  async clickReadyButton(): Promise<string> {
    return element(by.buttonText('I Am Ready')).click();
  }
}
