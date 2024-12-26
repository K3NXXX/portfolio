import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import style from './Header.module.scss'

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
			className={style.root}
		>
			<div className={style.left}>
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
					className={style.level}
				>
					<span className={style.number}>37</span>
					<span className={style.text}>level</span>
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
					className={style.coins}
				>
					<span className={style.number}>4,738</span>
					<span className={style.text}>coins awarded</span>
				</motion.div>
			</div>
			<div className={style.right}>
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
					className={style.time}
				>
					<p className={style.text}>Time:</p>
					<p className={style.number}>{currentTime}</p>
				</motion.div>
			</div>
		</motion.header>
	)
}

export default Header
