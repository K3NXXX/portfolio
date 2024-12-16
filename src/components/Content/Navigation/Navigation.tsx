import NavItem from './NavItem/NavItem'
import { INavItem, navList } from '../../../lists/navList'
import style from './Navigation.module.scss'


const Navigation: React.FC = () => {
	return (
		<div className={style.root}>
			{navList.map((page: INavItem) => (
				<NavItem key={page.id} page={page} />
			))}
		</div>
	)
}

export default Navigation
