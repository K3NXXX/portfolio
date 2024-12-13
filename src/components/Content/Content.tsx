import { useState } from 'react'
import Beginning from './Beginning/Beginning'
import styles from './Content.module.scss'
import Navigation from './Navigation/Navigation'
import Projects from './Projects/Projects'
import Quest from './Quest/Quest'
import UserInfo from './UserInfo/UserInfo'

const Content: React.FC = () => {
	const [section, setSection] = useState(1)
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<UserInfo />
				<div className={styles.category__wrapper}>
                    {section === 1 && <Beginning />}
                    {section === 4 && <Projects/>}
				</div>

				<Quest />
			</div>
			<Navigation setSection={setSection} />
		</div>
	)
}

export default Content
