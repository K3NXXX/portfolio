import project1 from "../assets/projects/luxury hotel.png"

interface IProject {
	id: number
	name: string
	type: string
	shortDescription: string
	fullDescription: string
	technologies: string
	image: string
}

export const projectsList: IProject[] = [
	{
		id: 1,
		name: 'Luxury Hotel',
		type: 'React',
		shortDescription: 'Website where you can book suites, tables and meeting rooms',
		fullDescription: "",
		technologies: "React, SCSS, TypeScript, React Query, MUI, SQL, ExpressJS",
		image: project1
	},
	{
		id: 2,
		name: 'Tattoo Store',
		type: 'React',
		shortDescription: 'Website where you can buy tattoo equipment',
		fullDescription: "",
		technologies: "React, SCSS, TypeScript, React Query, MUI, SQL, ExpressJS",
		image: project1
	},
]
