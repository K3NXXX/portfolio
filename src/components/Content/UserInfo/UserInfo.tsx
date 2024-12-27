import { motion } from 'motion/react'
import { useState } from 'react'
import { IoIosBluetooth } from 'react-icons/io'
import { RiDashboardHorizontalLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/userInfo/avatar.png'
import { PAGES } from '../../../constants/pages.constants'
import Contacts from '../Contacts/Contacts'
import styles from './UserInfo.module.scss'

const UserInfo: React.FC = () => {
	const [openContacts, setOpenContacts] = useState(false)
	const handleClose = () => setOpenContacts(false)

	return (
		<motion.aside
			initial={{ x: '-100%', scale: 0, opacity: 0 }}
			animate={{ x: 0, scale: 1, opacity: 1 }}
			transition={{
				duration: 1.4,
				ease: 'easeOut',
				delay: 0.3,
			}}
			className={styles.root}
		>
			<div className={styles.wrapper}>
				<motion.img
					className={styles.avatar}
					src={avatar}
					alt='avatar'
					whileHover={{ rotateY: 360 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					initial={{ scale: 0.5 }}
					animate={{ scale: 1 }}
				/>

				<div className={styles.content}>
					<div className={styles.info__wrapper}>
						<div className={styles.info}>
							<div className={styles.name}>
								<span>Name</span>
								<p>Volodya Andrushevskyi</p>
							</div>

							<div className={styles.occupation}>
								<span>Occupation</span>
								<p>Web developer</p>
							</div>
						</div>

						<div className={styles.buttons}>
							<motion.div
								initial={{ opacity: 0, y: 50, rotate: -20 }}
								animate={{ opacity: 1, y: 0, rotate: 0 }}
								transition={{
									duration: 1.0,
									ease: 'easeOut',
									delay: 0.9,
								}}
								onClick={() => setOpenContacts(true)}
								className={styles.btn__wrapper}
							>
								<button className={styles.openSocial}>Open connection</button>
								<IoIosBluetooth
									className={styles.icon}
									size={25}
									color='#e84a4a'
								/>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.7, rotate: 10 }}
								animate={{ opacity: 1, scale: 1, rotate: 0 }}
								transition={{
									duration: 1.2,
									ease: 'easeOut',
									delay: 1.2,
								}}
							>
								<Link to={PAGES.PROJECTS} className={styles.btn__wrapper}>
									<button className={styles.openProjects}>Open projects</button>
									<RiDashboardHorizontalLine
										className={styles.icon}
										size={25}
										color='#e84a4a'
									/>
								</Link>
							</motion.div>
						</div>
					</div>

					<motion.div
						whileHover={{ scale: 1.1, rotate: 5 }}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 1.3,
							ease: 'easeOut',
							delay: 1.5,
						}}
						className={styles.motto}
					>
						<span>Motto:</span>
						<p>Turning Ideas into Interactive Realities</p>
					</motion.div>
				</div>
			</div>

			{openContacts && <Contacts handleClose={handleClose} />}
		</motion.aside>
	)
}

export default UserInfo
