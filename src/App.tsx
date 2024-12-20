import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navigation from './components/Content/Navigation/Navigation'
import Projects from './components/Content/Projects/Projects'
import Quest from './components/Content/Quest/Quest'
import UserInfo from './components/Content/UserInfo/UserInfo'
import Header from './components/Header/Header'
import NavigationMobile from './components/Content/Navigation/NavigationMobile/NavigationMobile'
import { PAGES } from './constants/pages.constants'
import './global.scss'
import AboutMe from './pages/AboutMe/AboutMe'
import Achievements from './pages/Achievements/Achievements'
import Beginning from './pages/Beginning/Beginning'
import Intro from './pages/Intro/Intro'
import Project from './pages/Project/Project'

const App: React.FC = () => {
	const location = useLocation()
	const isIntroPage = location.pathname === PAGES.INTRO

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<div className='App'>
			{!isIntroPage && <Header />}
			<main className='main'>
				{!isIntroPage && <UserInfo />}
				<Routes>
					<Route path={PAGES.INTRO} element={<Intro />} />
					<Route path={PAGES.BEGINNING} element={<Beginning />} />
					<Route path={`${PAGES.PROJECT}/:id`} element={<Project />} />
					<Route path={PAGES.PROJECTS} element={<Projects />} />
					<Route path={PAGES.ABOUT_ME} element={<AboutMe />} />
					<Route path={PAGES.ACHIEVEMENTS} element={<Achievements />} />
				</Routes>
				{!isIntroPage && <Quest />}
			</main>
			{!isIntroPage && <Navigation />}
			{!isIntroPage && <NavigationMobile />}
			<div className='gradient__right'></div>
			<div className='gradient__left'></div>
		</div>
	)
}

export default App
