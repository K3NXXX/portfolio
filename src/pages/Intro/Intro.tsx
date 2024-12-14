import { PAGES } from '../../constants/pages.constants'
import style from "./Intro.module.scss"
import {Link} from "react-router-dom"
const Intro:React.FC = () => {
    return (  
        <section className={style.root}>
            <div className={style.content}>
                <div className={style.content__left}>
                    <p>HI!</p>
                </div>
                <div className={style.content__right}>
                    <p className={style.welcome}>Welcome to my portfolio.</p>
                    <p className={style.text1}>Warning!</p>
                    <p className={style.text2}>You will find ‘achievements’ or ‘quests’ that show the progress in my professional life and are related to what I am working on.</p>
                    <Link className={style.btn} to={PAGES.PORTFOLIO}>enter the system</Link>

                </div>
            </div>
        </section>
    );
}
 
export default Intro;