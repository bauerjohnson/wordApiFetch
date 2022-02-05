import React, {useState} from 'react';
import axios from 'axios';

import List from './components/List';
import './App.css';

function App() {
  const [putword, setputword] = useState([]);
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     wordy: 'paint',
  //     meaning: ['love, beauty',]
    
  //   },
  //   {
  //     id: 2,
  //     wordy: 'Some Dummy Movie 2',
  //     meaning: 'love, beauty',
      
  //   },
  // ];

  
  


  var options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
    headers: {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': 'be3419a0f3msh2a49125fa632e4cp1751d8jsna5dcd08280e8'
    }
  };
  
  axios.request(options)
  .then(response => {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

// function getword () {
//   return putword.map((word, typeOf) => {
//     return  <List wordy ={word} meaning ={typeOf} key={1}/>
//   })
// }

// useEffect(() => {
//   getword ();
// }, [])

 
// if(putword) {

  return (
    <React.Fragment>
      <section>
        <button>word</button>
      </section>
      <section>
    <List words ={putword}/>
      </section>
    </React.Fragment>
  );
}
// return null;
// }

export default App;
