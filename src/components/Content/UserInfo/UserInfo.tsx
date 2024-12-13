import style from "./UserInfo.module.scss"
import avatar from "../../../assets/userInfo/avatar.png"
import bluetoothIcon from "../../../assets/userInfo/bluetoothIcon.svg"

const UserInfo:React.FC = () => {
    return (  
        <aside className={style.root}>
            <img className={style.avatar} src={avatar} alt="avatar" />
            <div className={style.content}>
                <div className={style.name}>
                    <span>Name</span>
                    <p>Volodya Andrushevskyi</p>
                </div>
                <div className={style.occupation}>
                    <span>Occupation</span>
                    <p>Web developer</p>
                </div>
                <div className={style.social}>
                    <div className={style.btn__wrapper}>
                        <button className={style.openSocial}>open connection</button>
                        <img className={style.icon} src={bluetoothIcon} alt="bluetooth icon" />
                    </div>
                   
                </div>
            </div>
        </aside>
    );
}
 
export default UserInfo;