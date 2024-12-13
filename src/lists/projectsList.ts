import project1 from "../assets/projects/1.png"
import project2 from "../assets/projects/2.png"
import project3 from "../assets/projects/3.png"

export interface IProject {
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
		technologies: "React, SCSS, Redux Toolkit, TypeScript, React Query, MUI, MongoDB, ExpressJS",
		image: project2
	},
	{
		id: 3,
		name: 'TechLand Store',
		type: 'React',
		shortDescription: 'Website where you can buy electronics equipment',
		fullDescription: "",
		technologies: "React, SCSS, TypeScript, React Query, MUI, SQL, ExpressJS",
		image: project3
	},
]
