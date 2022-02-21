import React, {useState, useEffect} from 'react';
import Api from './Api';
import "./Typeof.css"

const TypeOf = () => {
    const [putword, setputword] = useState([]);
  const [meaning1, setmeaning1] = useState(["click HATCHBACK to see meaning"]);
  const [meaning2, setmeaning2] = useState();
  const [meaning3, setmeaning3] = useState();
  const [meaning4, setmeaning4] = useState();
  const [meaning5, setmeaning5] = useState();
  const [meaning6, setmeaning6] = useState();

  let str1 = "";
  let str2 = "";
  let str3 = "";
  let str4 = "";
  let str5 = "";
  let str6= "";


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
       str1 = response.data.typeOf[0];
       str2= response.data.typeOf[1];
       str3 = response.data.typeOf[2];
       str4 = response.data.typeOf[3];
       str5 = response.data.typeOf[4];
       str6 = response.data.typeOf[5];
   
      setmeaning1(str1);
      setmeaning2(str2);
      setmeaning3(str3);
      setmeaning4(str4);
      setmeaning5(str5);
      setmeaning6(str6);

     
      
    }).catch((error) => {
      console.log(error)
    })
    }


  
  // const meaningclickhandler = () => {
  //     setmeaning1(true)
  // }

  return <>
{/* <section>
        <button onClick={fetchdata}>fetch word</button>
      </section> */}
    
          <tr>
          <td className='word' onClick={fetchword}>{putword}</td>

<td className='blink'>{meaning1}</td>
<td className='m'>{meaning2}</td>
<td className='m'>{meaning3}</td>
<td className='m'>{meaning4}</td>
<td className='m'>{meaning5}</td>
<td className='m'>{meaning6}</td>

    
          </tr>
         
     

    
    
  </>;
};

export default TypeOf;
