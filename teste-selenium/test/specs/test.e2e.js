const { remote } = require('webdriverio');

describe('WebDriverIO com Mocha', () => {
    let browser;

    before(async () => {
        browser = await remote({
            path: '/',
            capabilities: {
                browserName: 'chrome'
            }
        });
    });

    after(async () => {
        await browser.deleteSession();
    });

    it('should get sigaa page title', async () => {
        await browser.url('https://sigaa.ufrrj.br/sigaa/verTelaLogin.do');

        const title = await browser.getTitle();
        expect(title).toBe('SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas');
    });

    it('should get sigaa home page header text', async () => {
        const user = await browser.$('[name="user.login"]');
        await user.waitForExist({ timeout: 15000 });

        const inputUser = await browser.$('[name="user.login"]');
        await inputUser.setValue('seu-nome-de-usuário');

        const password = await browser.$('[name="user.senha"]');
        await password.waitForExist({ timeout: 15000 });

        const inputPassword = await browser.$('[name="user.senha"]');
        await inputPassword.setValue('sua-senha');

        const submitButton = await browser.$('input[type="submit"]');
        await submitButton.click();

        const headerText = await browser.$('div.box-geral.borda div.box-cabecalho h3');
        await headerText.waitForExist({ timeout: 15000 });
        const text = await headerText.getText();
        expect(text).toBe('Minhas turmas');
    });
});