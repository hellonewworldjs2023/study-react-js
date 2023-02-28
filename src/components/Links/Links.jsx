import classes from 'src/components/Links/Links.module.css'
import { Inter } from '@next/font/google'
import { useState,useCallback } from 'react'


const inter = Inter({ subsets: ['latin'] })

const ITEMS =[
  { href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Docs",
    description:"Find in-depth information about Next.js features and API."
  },
  { href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Learn",
    description:"Learn about Next.js in an interactive course with quizzes!"
  },
  { href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Templates",
    description:"Discover and deploy boilerplate example Next.js projects."
  },
  { href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Deploy",
    description:"Instantly deploy your Next.js site to a shareable URL with Vercel."
  },
]

export function Links() {
  const [items,setItems] = useState(ITEMS);
  const handleReduce = useCallback(() =>{
    setItems(prevItems =>{
      return prevItems.slice(0,prevItems.length - 1);
    });
  },[])

  return (
        <div className={classes.grid}>
          <button onClick={handleReduce}>減らす</button>
          {items.map(item =>{
            return(
              <a
              key={item.href}
              href={item.href}
              className={classes.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                {item.title} <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                {item.description}
              </p>
            </a>
            );
          })}
          
        </div>
  )
}
