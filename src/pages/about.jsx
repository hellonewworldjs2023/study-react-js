import Head from 'next/head'
import { Main } from 'src/components/Main/Main'
import { Header } from 'src/components/Header/Header';


 const About = (props) =>{
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
      
      <button onClick={props.handleClick}>ボタン</button><br/>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示":"表示"}</button><br/>
      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <input 
      type="text" 
      value={props.text} 
      onChange={props.handleChange}/><br/>
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map( item => {
         return(<li key={item}>{item}</li>)
        })}
      </ul>
      <Main  path="about"/>
    </>
  )
}

export default About;