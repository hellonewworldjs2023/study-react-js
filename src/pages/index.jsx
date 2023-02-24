import Head from 'next/head'
import { Main } from 'src/components/Main/Main'
import { Header } from 'src/components/Header/Header'
import { useEffect, useState,useCallback  } from 'react';



export default function Home() {
  const [count,setCount] = useState(1);
  const [text,setText] = useState("");
  const [isShow,setIsShow] = useState(false);
  const [array,setArray] = useState([]);


  const handleClick = useCallback(() => {
    console.log(count);
    if(count < 10){
      setCount((prevCount) => prevCount + 1);
    }
  },[count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
      // return isShow ? false : true;  
  },[]);

  const handleChange = useCallback((e) => {
    if(e.target.value.length > 5){
      alert("5文字以内にしてください");
      return;
    }    
    setText(e.target.value);
    },[]);

  const handleAdd = useCallback(() =>{
    setArray((prevArray)=> {
      if(prevArray.some(item => item === text)){
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      const newArray = [...prevArray,text];
      return newArray;
    });
  },[text])
  
  useEffect(()=>{
    document.body.style.backgroundColor = "lightblue";

    return() =>{
      document.body.style.backgroundColor = ""; 
    }
  },[count]);
  // console.log(text);

  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button><br/>
      <button onClick={handleDisplay}>{isShow ? "非表示":"表示"}</button><br/>
      <input 
      type="text" 
      value={text} 
      onChange={handleChange}/><br/>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map( item => {
         return(<li key={item}>{item}</li>)
        })}
      </ul>
      <Main path="index" 
      />
    </>
  );
}
