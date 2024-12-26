import { useLocation } from 'react-router-dom'
import { PAGES } from '../../constants/pages.constants'
import Header from '../Header/Header'
import UserInfo from '../Content/UserInfo/UserInfo'
import NavigationMobile from '../Content/Navigation/NavigationMobile/NavigationMobile'
import Navigation from '../Content/Navigation/Navigation'

const PagesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isIntroPage = location.pathname === PAGES.INTRO;

    const isNotFoundPage = 
        !Object.values(PAGES).some(path => 
            location.pathname === path || location.pathname.startsWith(PAGES.PROJECT)
        );

    if (isIntroPage || isNotFoundPage) {
        return null; 
    }

    return (
        <>
            <Header />
            <UserInfo />
            {children}
            <Navigation />
            <NavigationMobile />
            <div className="gradient__right"></div>
            <div className="gradient__left"></div>
        </>
    );
};

export default PagesLayout