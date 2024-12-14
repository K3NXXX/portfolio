import { useDispatch } from 'react-redux'
import { navItemType } from '../../../../lists/navList'
import { setNavSection } from '../../../../redux/slices/globalSlice'
import style from './NavItem.module.scss'

interface INavItem {
	page: navItemType
}
const NavItem: React.FC<INavItem> = ({ page }) => {
	const dispatch = useDispatch()

	return (
		<div
			onClick={() => dispatch(setNavSection(page.id))}
			className={style.root}
		>
			<p className={style.name}>{page.name}</p>
			<p className={style.text}>{page.description}</p>
		</div>
	)
}

export default NavItem
