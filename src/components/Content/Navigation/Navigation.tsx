import { navItemType, navList } from '../../../lists/navList'
import style from './Navigation.module.scss'
import NavItem from './NavItem/NavItem'


interface NavigationProps {
    setCategory: (category: number) => void
}

const Navigation: React.FC<NavigationProps> = ({setCategory}) => {
	return (
		<div className={style.root}>
			{navList.map((page: navItemType) => (
				<NavItem setCategory={setCategory}  key={page.id} page={page} />
			))}
		</div>
	)
}

export default Navigation
