import { Link } from 'react-router-dom'
import { INavItem } from '../../../../lists/navList'
import style from './NavItem.module.scss'

interface INavItemProps {
	page: INavItem
}
const NavItem: React.FC<INavItemProps> = ({ page }) => {
	return (
		<Link to={page.url}>
			<div className={style.root}>
				<p className={style.name}>{page.name}</p>
				<p className={style.text}>{page.description}</p>
			</div>
		</Link>
	)
}

export default NavItem
