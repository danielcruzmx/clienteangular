import { AppCiecPage } from './app.po';

describe('app-ciec App', () => {
  let page: AppCiecPage;

  beforeEach(() => {
    page = new AppCiecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
