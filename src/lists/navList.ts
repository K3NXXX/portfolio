import { PAGES } from '../constants/pages.constants'

export interface INavItem {
	id: number
	name: string
	description: string
	url: string
}
export const navList: INavItem[] = [
	{
		id: 1,
		name: 'beginning',
		description: 'Redirecting to home.',
		url: PAGES.BEGINNING,
	},
	{
		id: 2,
		name: 'projects',
		description: 'Redirecting to projects.',
		url: PAGES.PROJECTS,
	},

	{
		id: 3,
		name: 'achievements',
		description: 'Redirecting to achievements.',
		url: PAGES.ACHIEVEMENTS,
	},
	{
		id: 4,
		name: 'About me',
		description: 'Redirecting to about me.',
		url: PAGES.ABOUT_ME,
	},
]
