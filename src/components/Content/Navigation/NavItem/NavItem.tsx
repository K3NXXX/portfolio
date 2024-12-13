import { navItemType } from "../../../../lists/navList";
import style from "./NavItem.module.scss"

type NavItemPropsType = {
    page: navItemType
    setCategory: (category: number) => void
}
const NavItem:React.FC<NavItemPropsType> = ({page, setCategory}) => {
    return (  
        <div onClick={() => setCategory(page.id)} className={style.root}>
            <p className={style.name}>{page.name}</p>
            <p className={style.text}>{page.description}</p>

        </div>
    );
}
 
export default NavItem;