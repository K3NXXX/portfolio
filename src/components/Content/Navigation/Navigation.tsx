import NavItem from './NavItem/NavItem'
import { INavItem, navList } from '../../../lists/navList'
import { motion } from 'framer-motion'
import style from './Navigation.module.scss'

const Navigation: React.FC = () => {
	const leftItems = navList.slice(0, 2) 
	const rightItems = navList.slice(2)

	return (
		<div className={style.root}>
			<div className={style.left}>
				{leftItems.map((page: INavItem, index: number) => (
					<motion.div
						key={page.id}
						initial={{ opacity: 0, x: -50 }} 
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.7,
							delay: index * 0.2, 
							ease: 'easeOut',
						}}
					>
						<NavItem page={page} />
					</motion.div>
				))}
			</div>
			<div className={style.right}>
				{rightItems.map((page: INavItem, index: number) => (
					<motion.div
						key={page.id}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.7,
							delay: index * 0.2 + 0.4,
							ease: 'easeOut',
						}}
					>
						<NavItem page={page} />
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Navigation
