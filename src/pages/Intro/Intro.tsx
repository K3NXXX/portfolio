import { Link } from 'react-router-dom'
import { PAGES } from '../../constants/pages.constants'
import styles from './Intro.module.scss'

const Intro: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<div className={styles.content__left}>
					<p>HI!</p>
				</div>
				<div className={styles.content__right}>
					<p className={styles.welcome}>Welcome to my portfolio.</p>
					<p className={styles.text1}>Warning!</p>
					<p className={styles.text2}>
						You will find ‘achievements’ or ‘quests’ that show the progress in
						my professional life and are related to what I am working on.
					</p>
					<Link className={styles.btn} to={PAGES.BEGINNING}>
						enter the system
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Intro
