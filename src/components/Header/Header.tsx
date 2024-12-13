import style from "./Header.module.scss"
import {useState, useEffect} from "react"

const Header:React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>("")
    useEffect(() => {
        const updateCurrentTime = () => {
            const now = new Date()
            const hours = now.getHours()
            const minutes = now.getMinutes()
            const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
            setCurrentTime(formattedTime)
        }
        const intervalId = setInterval(updateCurrentTime, 1000);

        return () => clearInterval(intervalId);
    }, [])
    return (  
        <header className={style.root}>
            <div className={style.left}>
                <div className={style.level}>
                    <span className={style.number}>37</span>
                    <span className={style.text}>level</span>
                </div>
                <div className={style.coins}>
                <span className={style.number}>4,738</span>
                    <span className={style.text}>coins awarded</span>
                </div>

            </div>
            <div className={style.right}>
                <div className={style.time}>
                    <p className={style.text}>Time:</p>
                    <p className={style.number}>{currentTime}</p>
                </div>
            </div>
        </header>
    );
}
 
export default Header;