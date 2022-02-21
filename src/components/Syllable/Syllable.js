import React, {useState, useEffect} from 'react';
import Api from './Api';
import './Syllable.css'

const Syllable = () => {
    const [putword, setputword] = useState([]);
    const [meaning1, setmeaning1] = useState(["how many syllable are in the word"]);
    const [meaning2, setmeaning2] = useState();
    const [meaning3, setmeaning3] = useState();
    const [meaning4, setmeaning4] = useState();

    let str1 = "";
  let str2 = "";
  let str3 = "";
  let str4 = "";

  useEffect(() => {
    fetchdata();
    }, [])
    
      function fetchdata (){
     
      Api.getData()
      .then((response) => {
        setputword(response.data.word);  
      }).catch((error) => {
        console.log(error)
      })
      }
    
      function fetchword (){
     
        Api.getData()
        .then((response) => {
           str1 = response.data.syllables.list[0];
           str2= response.data.syllables.list[1];
           str3 = response.data.syllables.list[2];
           str4 = response.data.syllables.list[3];
          
       
          setmeaning1(str1);
          setmeaning2(str2);
          setmeaning3(str3);
          setmeaning4(str4);
         
    
         
          
        }).catch((error) => {
          console.log(error)
        })
        }
  

    
  return (
   <>
    <tr>
          <td className='word' onClick={fetchword}>{putword}</td>

<td className='blink'>{meaning1}</td>
<td className='m'>{meaning2}</td>
<td className='m'>{meaning3}</td>
<td className='m'>{meaning4}</td>


    
          </tr>
   </>
  )
}

export default Syllable