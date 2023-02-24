import { useState,useCallback  } from 'react';

export const useCounter = () => {
    const [count,setCount] = useState(1);
    const [isShow,setIsShow] = useState(false);
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
  
    return {count,isShow,handleClick,handleDisplay}
  }