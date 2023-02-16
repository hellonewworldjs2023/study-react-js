import classes from 'src/components/Main/Main.module.css';
import { Logo } from 'src/components/Logo/Logo';
import { Links } from 'src/components/Links/Links';
import { Headline } from 'src/components/Headline/Headline';
import { Center } from 'src/components/Center/Center';



export function Main(props) {
  

  return (
      <main className={classes.main}>
        <div className={classes.description}>
        <Headline path={props.path}/>
          <div>
            <Logo/>
          </div>
        </div>
        <Center/>
        <Links/>
      </main>
  )
}
