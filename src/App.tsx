import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { PAGES } from './constants/pages.constants'
import Navigation from './components/Content/Navigation/Navigation'
import NavigationMobile from './components/Content/Navigation/NavigationMobile/NavigationMobile'
import Projects from './components/Content/Projects/Projects'
import Quest from './components/Content/Quest/Quest'
import UserInfo from './components/Content/UserInfo/UserInfo'
import Header from './components/Header/Header'
import AboutMe from './pages/AboutMe/AboutMe'
import Achievements from './pages/Achievements/Achievements'
import Beginning from './pages/Beginning/Beginning'
import Intro from './pages/Intro/Intro'
import NotFound from './pages/NotFound/NotFound'
import Project from './pages/Project/Project'
import './global.scss'

const App: React.FC = () => {
	const location = useLocation()
	const [isPageLoaded, setIsPageLoaded] = useState(false)

	const isIntroPage = location.pathname === PAGES.INTRO
	const isNotFoundPage = !Object.values(PAGES).some(
		path =>
			location.pathname === path || location.pathname.startsWith(PAGES.PROJECT)
	)

	useEffect(() => {
		document.body.scrollTop = 0
	}, [location])

	useEffect(() => {
		if (
			document.readyState === 'interactive' ||
			document.readyState === 'complete'
		) {
			setIsPageLoaded(true)
		} else {
			const handleDOMContentLoaded = () => setIsPageLoaded(true)
			document.addEventListener('DOMContentLoaded', handleDOMContentLoaded)

			return () => {
				document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded)
			}
		}
	}, [])

	if (!isPageLoaded) {
		return null
	}

	return (
		<div className='App'>
			{isPageLoaded && !isIntroPage && !isNotFoundPage && <Header />}
			<main className='main'>
				{isPageLoaded && !isIntroPage && !isNotFoundPage && <UserInfo />}
				<Routes>
					<Route path={PAGES.INTRO} element={<Intro />} />
					<Route path={PAGES.BEGINNING} element={<Beginning />} />
					<Route path={`${PAGES.PROJECT}/:id`} element={<Project />} />
					<Route path={PAGES.PROJECTS} element={<Projects />} />
					<Route path={PAGES.ABOUT_ME} element={<AboutMe />} />
					<Route path={PAGES.ACHIEVEMENTS} element={<Achievements />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				{isPageLoaded && !isIntroPage && !isNotFoundPage && <Quest />}
			</main>
			{isPageLoaded && !isIntroPage && !isNotFoundPage && <Navigation />}
			{isPageLoaded && !isIntroPage && !isNotFoundPage && <NavigationMobile />}
			<div className='gradient__right'></div>
			<div className='gradient__left'></div>
		</div>
	)
}

export default App
