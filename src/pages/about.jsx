import Head from 'next/head'
import { Main } from 'src/components/Main/Main'
import { Header } from 'src/components/Header/Header';


export default function About({
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
  text,
  array,
  handleChange,
  handleAdd}) 
{
 
 

  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      
      <button onClick={handleClick}>ボタン</button><br/>
      <button onClick={handleDisplay}>{isShow ? "非表示":"表示"}</button><br/>
      {isShow ? <h1>{doubleCount}</h1> : null}
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
      <Main  path="about"/>
    </>
  )
}
