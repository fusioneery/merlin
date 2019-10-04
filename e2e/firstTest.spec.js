describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should write hello text', async () => {
    await expect(element(by.id('hello-text'))).toHaveText('Привет, мир!!');
  });
});
