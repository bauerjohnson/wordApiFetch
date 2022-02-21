import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wordsapiv1.p.rapidapi.com/words/math/',
  headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': 'be3419a0f3msh2a49125fa632e4cp1751d8jsna5dcd08280e8'
  },
});

export default {
  getData: () => instance({
    method: 'GET',
    url: 'hasCategories',
    
    'params': {
      'search':'array',
  },
  'headers': {
    'content-type':'application/json'  
  }
  })
 
}