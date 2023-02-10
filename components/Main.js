import styles from '@/styles/Home.module.css'
import { Logo } from 'components/Logo'
import { Links } from 'components/Links'
import { Headline } from 'components/Headline'
import { Center } from 'components/Center'


export function Main(props) {
  return (
      <main className={styles.main}>
        <div className={styles.description}>
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
