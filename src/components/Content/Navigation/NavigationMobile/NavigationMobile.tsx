import React, { useState } from 'react'
import NavigationMobileMenu from '../NavigationMobileMenu/NavigationMobileMenu'
import styles from './NavigationMobile.module.scss'

const NavigationMobile: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<>
			<div onClick={() => setOpenMenu(true)} className={styles.root}>
				<button>Navigation</button>
			</div>
			{openMenu && <NavigationMobileMenu setOpenMenu={setOpenMenu} />}
		</>
	)
}

export default NavigationMobile
