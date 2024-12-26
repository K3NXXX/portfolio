import { motion } from 'motion/react'
import { questsList, questsType } from '../../../lists/questsList'
import styles from './Quest.module.scss'
import QuestItem from './QuestItem/QuestItem'

const Quest: React.FC = () => {
	return (
		<motion.div
			initial={{ x: '100%', scale: 0.6, opacity: 0 }}
			animate={{ x: 0, scale: 1, opacity: 1 }}
			transition={{
				duration: 1,
				ease: 'easeOut',
				delay: 0.3,
				type: 'spring',
				stiffness: 50,
			}}
			className={styles.root}
		>
			<div className={styles.content}>
				<motion.h3
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 0.8,
						ease: 'easeOut',
						delay: 0.5,
					}}
					className={styles.title}
				>
					Active quests
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 0.8,
						ease: 'easeOut',
						delay: 0.7,
					}}
					className={styles.quest__line}
				>
					frontend skills-up line
				</motion.p>
				{questsList.map((quest: questsType) => (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							ease: 'easeOut',
							delay: 1,
						}}
						key={quest.id}
					>
						<QuestItem key={quest.id} quest={quest} />
					</motion.div>
				))}
			</div>
			<div className={styles.gradient}></div>
		</motion.div>
	)
}

export default Quest
