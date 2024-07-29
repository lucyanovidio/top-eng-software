# Teste de Sistema UFRRJ com Selenium

Atividade de desenvolvimento de testes automatizados de sistema, abordando um sistema da UFRRJ, o SIGAA, usando <a href="https://www.selenium.dev">Selenium</a>, visando observar: 

- Interação com elementos web;
- Recuperação de informação sobre elementos web;
- Identificação de um ou mais elementos específicos no DOM;

Foi usado o <a href="https://www.selenium.dev/documentation/webdriver/">Selenium Webdriver</a> e o framework <a href="https://mochajs.org">Mocha</a>.

A atividade automatizada realiza testes simples: obtém o título da página web inicial do SIGAA, entra no sistema com usuário e senha fornecidos, e confere o cabeçalho padrão para todo usuário ("Minhas turmas"), presente na home page.

## Como rodar

Você precisará ter o <a href="https://nodejs.org/pt">**Node**</a> instalado.

Clone o repositório:

```
git clone https://github.com/lucyanovidio/top-eng-software.git
```

Instale as dependências:

```
npm install
```
Substitua *"seu-nome-de-usuário"* pelo seu usuário no sistema, e *"sua-senha"* pela sua senha do sistema, no arquivo **test.e2e.js**. Em seguida, execute os testes:

```
npm test
```