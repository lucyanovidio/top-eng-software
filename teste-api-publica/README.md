# Teste de API Pública

Atividade de teste de uma API pública usando <a href="">**Supertest**</a>. A API testada foi a <a href="https://api.adviceslip.com/#endpoint-random">Advice Slip JSON API</a>.


## Casos de teste

Os seguintes **casos de teste** foram observados, considerando as entradas pelos *endpoints* e os retornos por suas saídas:

1. 
- **Entrada:** GET */*
- **Saída esperada:** Um objeto JSON com uma string de conselho aleatório e seu ID de tipo inteiro.
- **Descrição:** Teste do retorno de um conselho aleatório para o endpoint em questão.

2.
- **Entrada:** GET */1*
- **Saída esperada:** Um objeto JSON do conselho ID de número 1.
    ```
    {
        "slip": {
            "id": 1,
            "advice": "Remember that spiders are more afraid of you, than you are of them."
        }
    }
    ```
- **Descrição:** Teste do retorno de conselho ID de número 1.

3.
- **Entrada:** GET */2*
- **Saída esperada:** Um objeto JSON do conselho ID de número 2.
    ```
    {
        "slip": {
            "id": 2,
            "advice": "Smile and the world smiles with you. Frown and you're on your own."
        }
    }
    ```
- **Descrição:** Teste do retorno de conselho ID de número 2.

4.
- **Entrada:** GET */search/doubt*
- **Saída esperada:** Um objeto JSON com um array de resultados para a query com a palavra "doubt".
    ```
    {
        "total_results": "2",
        "query": "doubt",
        "slips": [
            {
                "id": 30,
                "advice": "When in doubt, just take the next small step.",
                "date": "2017-01-21"
            },
            {
                "id": 97,
                "advice": "If you are ever in doubt about whether or not to wash your hair: Wash it.",
                "date": "2017-02-08"
            }
        ]
    }
    ```
- **Descrição:** Teste do retorno de conselhos correspondentes a uma pesquisa de uma palavra fornecida como parâmetro.

5.
- **Entrada:** GET */search/*
- **Saída esperada:** Erro 404 - Not found.
- **Descrição:** Teste do retorno a partir de uma pesquisa sem ter fornecido nenhuma palavra como parâmetro.


## Como rodar

Você precisará ter o <a href="https://nodejs.org/pt">**Node**</a> instalado.

- Clone o repositório

```
git clone https://github.com/lucyanovidio/top-eng-software.git
```

- Instale as dependências 

```
npm install
```

- Execute os testes

```
npm test
```