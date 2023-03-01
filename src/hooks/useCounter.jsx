import { useState,useCallback,useMemo  } from 'react';


export const useCounter = () => {
    const [count,setCount] = useState(1);
    const [isShow,setIsShow] = useState(false);

    const doubleCount = useMemo(() => {
      return count * 2;
    },[count]);

    const handleClick = useCallback(() => {
      console.log(doubleCount);
      if(count < 10){
        setCount((prevCount) => prevCount + 1);
      }
    },[count]);
  
    const handleDisplay = useCallback(() => {
      setIsShow((prevIsShow) => !prevIsShow);
        // return isShow ? false : true;  
    },[]);
  
    return {count,doubleCount,isShow,handleClick,handleDisplay}
  }