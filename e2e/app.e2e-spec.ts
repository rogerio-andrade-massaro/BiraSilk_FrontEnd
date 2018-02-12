import { BiraSilkPage } from './app.po';

describe('bira-silk App', () => {
  let page: BiraSilkPage;

  beforeEach(() => {
    page = new BiraSilkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
