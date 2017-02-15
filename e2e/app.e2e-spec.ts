import { Ng2mapPage } from './app.po';

describe('ng2map App', function() {
  let page: Ng2mapPage;

  beforeEach(() => {
    page = new Ng2mapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
