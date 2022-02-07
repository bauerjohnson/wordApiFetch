import React, {useState} from 'react';
import Api from './Api';

import List from './components/List';
import './App.css';

function App() {
  const [putword, setputword] = useState([]);
  const [meaning, setmeaning] = useState(false);
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
  // var options = {
  //   method: 'GET',
  //   url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
  //   headers: {
  //     'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  //     'x-rapidapi-key': 'be3419a0f3msh2a49125fa632e4cp1751d8jsna5dcd08280e8'
  //   }
  // };


  // // function fetchdatahandler () {
  //  fetch (options).then(response => {
  //     console.log(response.data);
      // return response.properties;
     
      
    // })
    // .then(data => {
    //   const transformed = data.map(info => {
    //     return {
    //       id: info.id,
    //     wordy : info.word,
    //     meaning: info.typeOf  
    //     }
    //   })
    // setputword(transformed) 
    // })
  // }  
  
  


  // var options = {
  //   method: 'GET',
  //   url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
  //   headers: {
  //     'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  //     'x-rapidapi-key': 'be3419a0f3msh2a49125fa632e4cp1751d8jsna5dcd08280e8'
  //   }
  // };
  
  // // axios.request(options)
  //    fetch (options)
  // .then(response => {
  //   // return response.json();
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

// function getword () {
//   return putword.map((word, typeOf) => {
//     return  <List wordy ={word} meaning ={typeOf} key={1}/>
//   })
// }

// useEffect(() => {
//   getword ();
// }, [])

 
// if(putword) {

// const fetchdata = (event) => {
//   event.preventDefault();


// Api.getData()
// .then((response) => {
//   setputword(response.data);
//   console.log(response.data)
// }).catch((error) => {
//   console.log(error)
// })
// }



const fetchdata = (event) => {
  console.log(event);
  event.preventDefault();


Api.getData()
.then((response) => {
  let str = response.data;

  setputword(str);
  console.log(str)
}).catch((error) => {
  console.log(error)
})
}



  return (
    <React.Fragment>
      <section>
        <button onClick={fetchdata}>fetch word</button>
      </section>
      <section>
    {/* <List words ={putword}/> */}
<h1>{putword.word}</h1>

<li>{putword.typeOf}</li>


      </section>
    </React.Fragment>
  );
}
// return null;
// }

export default App;
