import { motion } from 'motion/react'
import { useState } from 'react'
import { IoIosBluetooth } from 'react-icons/io'
import { RiDashboardHorizontalLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/userInfo/avatar.png'
import { PAGES } from '../../../constants/pages.constants'
import Contacts from '../Contacts/Contacts'
import style from './UserInfo.module.scss'

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
			className={style.root}
		>
			<div className={style.wrapper}>
				<motion.img
					className={style.avatar}
					src={avatar}
					alt="avatar"
					whileHover={{ rotateY: 360 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					initial={{ scale: 0.5 }}
					animate={{ scale: 1 }}
				/>

				<div className={style.content}>
					<div className={style.info__wrapper}>
						<div className={style.info}>
							<motion.div
								whileHover={{ scale: 1.1 }}
								initial={{ opacity: 0, x: -40, rotate: -20 }}
								animate={{ opacity: 1, x: 0, rotate: 0 }}
								transition={{
									duration: 1.2,
									ease: 'easeOut',
									delay: 0.6,
								}}
								className={style.name}
							>
								<span>Name</span>
								<p>Volodya Andrushevskyi</p>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.1 }}
								initial={{ opacity: 0, x: -40, rotate: -20 }}
								animate={{ opacity: 1, x: 0, rotate: 0 }}
								transition={{
									duration: 1.2,
									ease: 'easeOut',
									delay: 0.7,
								}}
								className={style.occupation}
							>
								<span>Occupation</span>
								<p>Web developer</p>
							</motion.div>
						</div>

						<div className={style.buttons}>
							<motion.div
								initial={{ opacity: 0, y: 50, rotate: -20 }}
								animate={{ opacity: 1, y: 0, rotate: 0 }}
								transition={{
									duration: 1.0,
									ease: 'easeOut',
									delay: 0.9,
								}}
								onClick={() => setOpenContacts(true)}
								className={style.btn__wrapper}
							>
								<button className={style.openSocial}>Open connection</button>
								<IoIosBluetooth className={style.icon} size={25} color="#e84a4a" />
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
								<Link to={PAGES.PROJECTS} className={style.btn__wrapper}>
									<button className={style.openProjects}>Open projects</button>
									<RiDashboardHorizontalLine
										className={style.icon}
										size={25}
										color="#e84a4a"
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
						className={style.motto}
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
