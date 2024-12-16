import { questsList, questsType } from '../../../lists/questsList'
import styles from './Quest.module.scss'
import QuestItem from './QuestItem/QuestItem'

const Quest: React.FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<h3 className={styles.title}>Active quests</h3>
				<p className={styles.quest__line}>frontend skills-up line</p>
				{questsList.map((quest: questsType) => (
					<QuestItem key={quest.id} quest={quest} />
				))}
			</div>
			<div className={styles.gradient}></div>
		</div>
	)
}

export default Quest
