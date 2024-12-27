import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'

const Header: React.FC = () => {
	const [currentTime, setCurrentTime] = useState<string>('')

	useEffect(() => {
		const updateCurrentTime = () => {
			const now = new Date()
			const hours = now.getHours()
			const minutes = now.getMinutes()
			const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
			setCurrentTime(formattedTime)
		}
		const intervalId = setInterval(updateCurrentTime, 1000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<motion.header
			initial={{ opacity: 0, y: -100, scale: 0.6 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{
				duration: 1.2,
				ease: 'easeOut',
				delay: 1,
				type: 'spring',
				stiffness: 100,
			}}
			className={styles.root}
		>
			<div className={styles.left}>
				<motion.div
					initial={{ opacity: 0, y: -70, rotateX: -60, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
					transition={{
						duration: 1,
						ease: 'easeOut',
						delay: 0.8,
						type: 'spring',
						stiffness: 120,
					}}
					className={styles.level}
				>
					<span className={styles.number}>37</span>
					<span className={styles.text}>level</span>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: -70, rotateX: -60, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
					transition={{
						duration: 1,
						ease: 'easeOut',
						delay: 1,
						type: 'spring',
						stiffness: 120,
					}}
					className={styles.coins}
				>
					<span className={styles.number}>4,738</span>
					<span className={styles.text}>coins awarded</span>
				</motion.div>
			</div>
			<div className={styles.right}>
				<motion.div
					initial={{ opacity: 0, y: 70, rotateX: 60, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
					transition={{
						duration: 1,
						ease: 'easeOut',
						delay: 1.2,
						type: 'spring',
						stiffness: 120,
					}}
					className={styles.time}
				>
					<p className={styles.text}>Time:</p>
					<p className={styles.number}>{currentTime}</p>
				</motion.div>
			</div>
		</motion.header>
	)
}

export default Header
