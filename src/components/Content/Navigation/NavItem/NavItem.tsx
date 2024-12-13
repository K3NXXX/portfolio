import { navItemType } from "../../../../lists/navList";
import style from "./NavItem.module.scss"

interface INavItem {
    page: navItemType
    setSection: (category: number) => void
}
const NavItem:React.FC<INavItem> = ({page, setSection}) => {
    return (  
        <div onClick={() => setSection(page.id)} className={style.root}>
            <p className={style.name}>{page.name}</p>
            <p className={style.text}>{page.description}</p>

        </div>
    );
}
 
export default NavItem;