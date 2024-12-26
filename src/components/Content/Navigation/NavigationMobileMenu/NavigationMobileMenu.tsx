import 'animate.css'
import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { INavItem, navList } from '../../../../lists/navList'
import styles from './NavigationMobileMenu.module.scss'

interface INavigationMobileMenuProps {
	setOpenMenu: (openMenu: boolean) => void
}

const NavigationMobileMenu: React.FC<INavigationMobileMenuProps> = ({
	setOpenMenu,
}) => {
	const [animation, setAnimation] = useState('animate__fadeInUp')

	const handleClose = () => {
		setAnimation('animate__fadeOutDown')
		setTimeout(() => {
			setOpenMenu(false)
		}, 500)
	}

	return (
		<div className={`${styles.root} animate__animated ${animation}`}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<h6>Navigation</h6>
					<IoMdClose onClick={handleClose} size={30} color='white' />
				</div>

				<div className={styles.content}>
					<div className={styles.info__wrapper}>
						<div className={styles.level}>
							<span className={styles.number}>37</span>
							<span className={styles.text}>level</span>
						</div>
						<div className={styles.coins}>
							<span className={styles.number}>4,738</span>
							<span className={styles.text}>coins awarded</span>
						</div>
					</div>
					<ul className={styles.link__list}>
						{navList.map((page: INavItem) => (
							<Link
								onClick={() => setOpenMenu(false)}
								to={page.url}
								key={page.url}
							>
								<div className={styles.link}>
									<p className={styles.name}>{page.name}</p>
									<p className={styles.text}>{page.description}</p>
								</div>
							</Link>
						))}
					</ul>
				</div>
			</div>
      <div className={styles.gradient}></div>
		</div>
	)
}

export default NavigationMobileMenu
