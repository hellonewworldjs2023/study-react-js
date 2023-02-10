import React from "react";
import styles from '@/styles/Home.module.css';


export function Headline(props) {
  return (
    <div>      
        <p>
        Get started by editing&nbsp;
        <code className={styles.code}>src/pages/{props.path}.js</code>
        </p>
          
    </div>    
      
  )
}
