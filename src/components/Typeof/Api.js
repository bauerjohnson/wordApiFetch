import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/',
  headers: {
    'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    'x-rapidapi-key': 'be3419a0f3msh2a49125fa632e4cp1751d8jsna5dcd08280e8'
  },
});

export default {
  getData: () => instance({
    method: 'GET',
    url: 'typeOf',
    
    'params': {
      'search':'array',
  },
  'headers': {
    'content-type':'application/json'  
  }
  })
 
}
// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



















// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
//   headers: {
//     'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
//     'x-rapidapi-key': 'be3419a0f3msh2a49125fa632e4cp1751d8jsna5dcd08280e8'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });