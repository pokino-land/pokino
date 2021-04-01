import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should toggle the ready state of my player', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Me (not ready)');
	page.clickReadyButton();
    expect(await page.getTitleText()).toEqual('Me (ready)');
	page.clickReadyButton();
    expect(await page.getTitleText()).toEqual('Me (not ready)');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
