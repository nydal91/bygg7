import { Bygg7Page } from './app.po';

describe('bygg7 App', function() {
  let page: Bygg7Page;

  beforeEach(() => {
    page = new Bygg7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
