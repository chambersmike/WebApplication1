describe('magic8ball simple test', function () {
    it('ask a question...get an answer...', function () {
        browser.get('http://localhost:16474/');

        element(by.id('questionText')).sendKeys('write first protractor test');
        element(by.id('askButton')).click();

        var response = element(by.id('ominousResponse'));
        expect(response.getText().length).not.toEqual('');
    });
});