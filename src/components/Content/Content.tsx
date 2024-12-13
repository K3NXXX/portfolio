import { useState } from 'react'
import Beginning from './Beginning/Beginning'
import styles from './Content.module.scss'
import Navigation from './Navigation/Navigation'
import Projects from './Projects/Projects'
import Quest from './Quest/Quest'
import UserInfo from './UserInfo/UserInfo'

const Content: React.FC = () => {
	const [category, setCategory] = useState(1)
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<UserInfo />
				<div className={styles.category__wrapper}>
                    {category === 1 && <Beginning />}
                    {category === 4 && <Projects/>}
				</div>

				<Quest />
			</div>
			<Navigation setCategory={setCategory} />
		</div>
	)
}

export default Content
