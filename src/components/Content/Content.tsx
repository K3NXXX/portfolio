import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Beginning from './Beginning/Beginning'
import styles from './Content.module.scss'
import Projects from './Projects/Projects'

const Content: React.FC = () => {
	const { navSection } = useSelector((state: RootState) => state.global)
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<div className={styles.category__wrapper}>
					{navSection === 1 && <Beginning />}
					{navSection === 4 && <Projects />}
				</div>
			</div>
		</div>
	)
}

export default Content
