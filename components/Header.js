import classes from "./Header.module.css"
import Link from "next/link";

export function Header() {
    return (  
      <header className={classes.header}>
          <Link href="/">
            <div className={classes.anchor}> Index</div>
          </Link> 
          <Link href="/about">      
          <div className={classes.anchor}>About</div>
          </Link>  
      </header>  
    )
}