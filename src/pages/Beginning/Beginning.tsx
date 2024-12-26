import { motion } from 'motion/react'
import style from './Beginning.module.scss'

const Beginning: React.FC = () => {
	return (
		<motion.div
			className={style.root}
			initial={{
				opacity: 0,
				y: -50,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
                duration: 0.7,
				ease: 'easeOut',
			}}
		>
			<p className={style.text}>
				Navigating an endless web of interconnected devices and servers,
				bringing delight and wonder to users worldwide
			</p>
		</motion.div>
	)
}

export default Beginning
