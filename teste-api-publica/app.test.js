const request = require('supertest');

// URL base da API
const baseApiUrl = 'https://api.adviceslip.com/advice';

// Teste para a rota GET "" - Conselho aleatório
describe('GET ', () => {
  it('should return a random advice with correct types', async () => {
    const response = await request(baseApiUrl).get('');
    expect(response.status).toBe(200);
    expect(typeof response).toBe('object');
    expect(typeof JSON.parse(response.text).slip).toBe('object');
    expect(typeof JSON.parse(response.text).slip.id).toBe('number');
    expect(typeof JSON.parse(response.text).slip.advice).toBe('string');
  });
});

// Teste para a rota GET /1 - Conselho número 1
describe('GET /1', () => {
  it('should return advice number 1', async () => {
    const response = await request(baseApiUrl).get('/1');
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text)).toEqual(
        { 
            "slip": {
                "id": 1,
                "advice": "Remember that spiders are more afraid of you, than you are of them."
            } 
        }
    );
  });
});

// Teste para a rota GET /2 - Conselho número 2
describe('GET /2', () => {
  it('should return advice number 2', async () => {
    const response = await request(baseApiUrl).get('/2');
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text)).toEqual(
        { 
            "slip": {
                "id": 2,
                "advice": "Smile and the world smiles with you. Frown and you're on your own."
            }
        }
    );
  });
});

// Teste para a rota GET /search/doubt - Conselhos pela pesquisa da palavra "doubt"
describe('GET /search/doubt', () => {
  it('should return advice slips matching the search term doubt', async () => {
    const response = await request(baseApiUrl).get('/search/doubt');
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text)).toEqual(
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
    );
  });
});

// Teste para a rota GET /search/ - Conselhos pela pesquisa sem fornecimento de palavra
describe('GET /search/', () => {
  it('should return 404 if advice is not found', async () => {
    const response = await request(baseApiUrl).get('/search/');
    expect(response.status).toBe(404);
  });
});
