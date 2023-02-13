import React from "react";
import classes from './Headline.module.css';


export function Headline(props) {
  return (
    <div>      
        <p>
        Get started by editing&nbsp;
        <code className= {classes.code}>src/pages/{props.path}.js</code>
        </p>
          
    </div>    
      
  )
}
