import React from "react";
import classes from 'src/components/Headline/Headline.module.css';


export const Headline = (props) => {
  return (
    <div> 
      <p>アイテムの数は{props.items.length}個です</p>     
        <p>
        Get started by editing&nbsp;
        <code className= {classes.code}>src/pages/{props.path}.js</code>
        </p>
        
        <button onClick={props.handleReduce}>減らす</button>
          
    </div>    
      
  )
}
