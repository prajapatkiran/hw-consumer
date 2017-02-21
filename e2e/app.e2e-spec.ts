import { HwConsumerPage } from './app.po';

describe('hw-consumer App', function() {
  let page: HwConsumerPage;

  beforeEach(() => {
    page = new HwConsumerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
