import { SpotiiPage } from './app.po';

describe('spotii App', function() {
  let page: SpotiiPage;

  beforeEach(() => {
    page = new SpotiiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
