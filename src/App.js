import React from 'react';

import TypeOf from './components/Typeof/TypeOf';
import Partof from './components/Partof/Partof';
import Haspart from './components/Haspart/Haspart';
import Similar from './components/Similar/Similar';
import Synonyms from './components/Synonyms/Synonyms';
import Definition from './components/Definition/Definition';
import Syllable from './components/Syllable/Syllable';
import Instanceof from './components/Instanceof/Instanceof';
import Hascategories from './components/Hascategories/Hascategories';
import Substance from './components/Substance/Substance';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <section className='heading'>
        WORD API
      </section>
     <header className='header'>
     Words API lets you retrieve information about English words, 
     including definitions, synonyms, rhymes, pronunciation, syllables,
      and frequency of usage. It also can tell you about relationships
       between words, for instance that “math” has categories like
        “algebra” and “geometry”, or that a “finger” is part of a
         “hand”. <span className='span'>CLICK</span> each word to see the answer
     </header>
 
      <table className="content-table">
        <thead>
          <tr className='split'>
            
            <th>WORD</th>
            
            
            <th>RELATED MEANING</th>
          </tr>
        </thead>
        
      </table>

      <table className="content-table">
       
        <tbody>
        <TypeOf/>
         
        </tbody>       
      </table>

      <table className="content-table">
       
        <tbody>
      
         <Partof/>
        </tbody>       
      </table>

      
      <table className="content-table">
       
        <tbody>
      
         <Haspart/>
        </tbody>       
      </table>

      <table className="content-table">
       
        <tbody>
      
         <Similar/>
        </tbody>       
      </table>

      <table className="content-table">
       
       <tbody>
     
       <Synonyms/>
       </tbody>       
     </table>

     <table className="content-table">
       
       <tbody>
     
       <Definition/>
       </tbody>       
     </table>      

     <table className="content-table">
       
       <tbody>
     
       <Syllable/>
       </tbody>       
     </table>     

     <table className="content-table">
       
       <tbody>
     
      <Instanceof/>
       </tbody>       
     </table>     

     <table className="content-table">
       
       <tbody>
     
      <Hascategories/>
       </tbody>       
     </table>     

     <table className="content-table">
       
       <tbody>
     
      <Substance/>
       </tbody>       
     </table>     
    </React.Fragment>
  );
}


export default App;
