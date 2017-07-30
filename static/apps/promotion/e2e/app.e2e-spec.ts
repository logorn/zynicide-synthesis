import { PromotionPage } from './app.po';

describe('promotion App', () => {
  let page: PromotionPage;

  beforeEach(() => {
    page = new PromotionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
