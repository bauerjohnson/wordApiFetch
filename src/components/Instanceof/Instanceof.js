import React, {useState, useEffect} from 'react';
import Api from './Api';
import "./Instanceof.css"

const Instanceof = () => {
    const [putword, setputword] = useState([]);
  const [meaning1, setmeaning1] = useState(["einstein is an instance of ?"]);
  
  let str1 = "";

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
           str1 = response.data.instanceOf[0];
          
       
          setmeaning1(str1);
          
    
         
          
        }).catch((error) => {
          console.log(error)
        })
        }
  return (
   <>
    <tr>
          <td className='word' onClick={fetchword}>{putword}</td>

<td className='m'>{meaning1}</td>


    
          </tr>
   </>
  )
}

export default Instanceof