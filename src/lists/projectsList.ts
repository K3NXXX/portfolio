import demoProjectImage1 from '../assets/projects/demoProjectImage1.png'
import demoProjectImage2 from '../assets/projects/demoProjectImage2.png'
import demoProjectImage3 from '../assets/projects/demoProjectImage3.png'
import demoProjectImage4 from '../assets/projects/demoProjectImage4.png'
import demoProjectImage5 from '../assets/projects/demoProjectImage5.png'

import fullProjectImage1 from '../assets/projects/fullProjectImage1.png'
import fullProjectImage2 from '../assets/projects/fullProjectImage2.png'
import fullProjectImage3 from '../assets/projects/fullProjectImage3.png'
import fullProjectImage4 from '../assets/projects/fullProjectImage4.png'
import fullProjectImage5 from '../assets/projects/fullProjectImage5.png'

export interface IProject {
	id: number
	name: string
	type: string
	shortDescription: string
	fullDescription: string
	frontendTechnologies: string
	backendTechnologies: string
	demoImage: string
	fullImage: string
	websiteUrl: string
	gitHubRepoUrl: string
}

export const projectsList: IProject[] = [
	{
		id: 1,
		name: 'Luxury Hotel',
		type: 'React',
		shortDescription:
			'Website where you can book suites, tables and meeting rooms',
		fullDescription:
			'Website includes booking management, email confirmation during registration and user feedbacks',
		fullImage: fullProjectImage1,
		demoImage: demoProjectImage1,
		frontendTechnologies: 'React, SCSS, TypeScript, React Query, MUI',
		backendTechnologies: 'SQL, Express, TypeScript',
		websiteUrl: 'https://luxury-hotel-react.vercel.app',
		gitHubRepoUrl: 'https://github.com/K3NXXX/luxury-hotel-react',
	},
	{
		id: 2,
		name: 'Tattoo Store',
		type: 'React',
		shortDescription:
			'Website to buy tattoo equipment, from tattoo machines to ink',
		fullDescription:
			'Website includes filtering goods, adding products to favourite, feedbacks and admin dashboard',
		demoImage: demoProjectImage2,
		frontendTechnologies:
			'React, SCSS, Redux Toolkit, TypeScript, React Query, MUI, React Hook Form',
		backendTechnologies: 'MongoDB, Express, TypeScript',
		fullImage: fullProjectImage2,
		websiteUrl: 'https://react-tattoo-store.vercel.app/react-tattoo-store',
		gitHubRepoUrl: 'https://github.com/K3NXXX/react-tattoo-store',
	},
	{
		id: 3,
		name: 'TechLand Store',
		type: 'React',
		shortDescription: 'Website where you can buy electronics equipment',
		fullDescription:
			'Website includes filtering goods, adding products to cart, feedbacks and Firebase authentication',
		demoImage: demoProjectImage3,
		frontendTechnologies: 'React, SCSS, TypeScript, React Query, Firebase, MUI',
		backendTechnologies: 'None',
		fullImage: fullProjectImage3,
		websiteUrl: 'https://k3nxxx.github.io/techland-shop/',
		gitHubRepoUrl: 'https://github.com/K3NXXX/techland-shop',
	},
	{
		id: 4,
		name: 'GPT-3 Static Layout',
		type: 'React',
		shortDescription: 'Website with static layout',
		fullDescription: 'Website with static layout where you can enjoy the UI',
		demoImage: demoProjectImage4,
		frontendTechnologies: 'React, SCSS',
		backendTechnologies: 'None',
		fullImage: fullProjectImage4,
		websiteUrl: 'https://k3nxxx.github.io/GPT-3/',
		gitHubRepoUrl: 'https://github.com/K3NXXX/GPT-3',
	},
	{
		id: 5,
		name: 'Vetra',
		type: 'React',
		shortDescription: 'Social network app',
		fullDescription:
			'The platform enables users to create posts, like and comment on them, chat in real time, receive instant notifications, follow other users, and more',
		demoImage: demoProjectImage5,
		frontendTechnologies: 'React, TypeScript, Zustand, MUI, Socket.IO, i18next',
		backendTechnologies: 'NestJS, Prisma, TypeScript, Socket.IO',
		fullImage: fullProjectImage5,
		websiteUrl: 'https://vetra-social-network-frontend.vercel.app',
		gitHubRepoUrl: 'https://github.com/K3NXXX/social-network-frontend',
	},
]
