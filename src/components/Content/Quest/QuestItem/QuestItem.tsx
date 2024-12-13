import { questsType } from "../../../../lists/questsList";
import rewardIcon1 from "../../../../assets/quests/reward1.png"
import rewardIcon2 from "../../../../assets/quests/reward2.png"
import style from "./QuestItem.module.scss"

type QuestItemPropsType = {
    quest: questsType;
}
const QuestItem:React.FC<QuestItemPropsType> = ({quest}) => {
    return (  
        <div className={style.root}>
            <p className={style.quest}>quest name</p>
            <p className={style.quest__name}>{quest.name}</p>
            <p className={style.goal}>Goal</p>
            <p className={style.goal__description}>{quest.description}</p>
            <p className={style.rewards}>rewards</p>
            <div className={style.rewards__container}>
                <div className={style.reward}>
                    <img src={rewardIcon1} alt="reward icon"/>
                    <p className={style.exp__number}>+{quest.rewards[1]}</p>
                </div>
                <div className={style.reward}>
                    <img src={rewardIcon2} alt="reward icon"/>
                    <p className={style.exp__number}>+{quest.rewards[0]}</p>
                </div>
            </div>

        </div>
    );
}
 
export default QuestItem;