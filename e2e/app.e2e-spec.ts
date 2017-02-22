import { NayouWebPage } from './app.po';

describe('nayou-web App', function() {
  let page: NayouWebPage;

  beforeEach(() => {
    page = new NayouWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
