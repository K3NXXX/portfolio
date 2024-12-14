import { Route, Routes, useLocation } from 'react-router-dom'
import Navigation from './components/Content/Navigation/Navigation'
import Quest from './components/Content/Quest/Quest'
import UserInfo from './components/Content/UserInfo/UserInfo'
import Header from './components/Header/Header'
import { PAGES } from './constants/pages.constants'
import Intro from './pages/Intro/Intro'
import Portfolio from './pages/Portfolio/Portfolio'
import Project from './pages/Project/Project'
import './global.scss'

const App: React.FC = () => {
	const location = useLocation()
	const isIntroPage = location.pathname === PAGES.INTRO

	return (
		<div className='App'>
			{!isIntroPage && <Header />}
			<main className='main'>
				{!isIntroPage && <UserInfo />}
				<Routes>
					<Route path={PAGES.INTRO} element={<Intro />} />
					<Route path={PAGES.PORTFOLIO} element={<Portfolio />} />
					<Route path={`${PAGES.PROJECT}/:id`} element={<Project />} />
				</Routes>
				{!isIntroPage && <Quest />}
			</main>
			{!isIntroPage && <Navigation />}
			<div className='gradient'></div>
		</div>
	)
}

export default App
