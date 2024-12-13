import NavItem from './NavItem/NavItem'
import { navItemType, navList } from '../../../lists/navList'
import style from './Navigation.module.scss'

interface NavigationProps {
	setSection: (category: number) => void
}

const Navigation: React.FC<NavigationProps> = ({ setSection }) => {
	return (
		<div className={style.root}>
			{navList.map((page: navItemType) => (
				<NavItem setSection={setSection} key={page.id} page={page} />
			))}
		</div>
	)
}

export default Navigation
