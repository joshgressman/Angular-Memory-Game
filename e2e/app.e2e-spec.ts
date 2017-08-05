import { AngularMemoryGamePage } from './app.po';

describe('angular-memory-game App', () => {
  let page: AngularMemoryGamePage;

  beforeEach(() => {
    page = new AngularMemoryGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
