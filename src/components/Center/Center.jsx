
import Image from 'next/image'
import classes from 'src/components/Center/Center.module.css'


export function Center() {
  return (
    
        <div className={classes.center}>
          <Image
            className={classes.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={classes.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>
       
        
     
    
  )
}