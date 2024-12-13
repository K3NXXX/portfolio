import style from "./Quest.module.scss"
import QuestItem from "./QuestItem/QuestItem";
import { questsList, questsType } from "../../../lists/questsList";

const Quest:React.FC = () => {
    return (  
        <div className={style.root}>
            <div className={style.content}>
                <h3 className={style.title}>Active quests</h3>
                <p className={style.quest__line}>backend skills-up line</p>
                {questsList.map((quest:questsType) => (
                     <QuestItem quest= {quest} />
                ))}  
            </div>

        </div>
    );
}
 
export default Quest;