import legendaryImage from "../assets/achievements/legendary.png"
import epicImage from "../assets/achievements/epic.png"
import rareImage from "../assets/achievements/rare.png"
import commonImage from "../assets/achievements/common.png"

export interface IAchievement {
	id: number,
	image: string
	name: string
	description: string
	progress: string
	type: string
}

export const achievementsList: IAchievement[] = [
	{
		id: 1,
		image: commonImage,
		name: "The beginning",
		description: "Learn HTML",
		progress: "achieved",
		type: "common"
	},
	{
		id: 2,
		image: commonImage,
		name: "Styles time",
		description: "Learn CSS",
		progress: "achieved",
		type: "common"
	},
	{
		id: 3,
		image: commonImage,
		name: "JS Journey",
		description: "Learn JavaScript",
		progress: "achieved",
		type: "common"
	},
	{
		id: 4,
		image: rareImage,
		name: "React Explorer",
		description: "Learn React",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 5,
		image: rareImage,
		name: "State Sorcerer",
		description: "Learn Redux Toolkit",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 6,
		image: rareImage,
		name: "Extra types",
		description: "Learn TypeScript",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 7,
		image: rareImage,
		name: "Queries Master",
		description: "Learn React Query",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 8,
		image: rareImage,
		name: "Next generation",
		description: "Learn NextJS",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 9,
		image: rareImage,
		name: "Next generation",
		description: "Learn NextJS",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 10,
		image: rareImage,
		name: "Next generation",
		description: "Learn NextJS",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 11,
		image: rareImage,
		name: "First API",
		description: "Learn Node and ExpressJS",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 12,
		image: rareImage,
		name: "Database Guru",
		description: "Learn MongoDB and SQL",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 13,
		image: rareImage,
		name: "Cozy corner",
		description: "Create portfolio",
		progress: "achieved",
		type: "rare"
	},
	{
		id: 14,
		image: epicImage,
		name: "Store architect",
		description: "Create 2 online stores",
		progress: "achieved",
		type: "epic"
	},
	{
		id: 15,
		image: epicImage,
		name: "Suite booker",
		description: "Create hotel website",
		progress: "achieved",
		type: "epic"
	},
	{
		id: 16,
		image: epicImage,
		name: "Music enjoyer",
		description: "Create Spotify clone",
		progress: "notAchieved",
		type: "epic"
	},
	{
		id: 17,
		image: legendaryImage,
		name: "Data expert",
		description: "Create dashboard for monitoring business",
		progress: "notAchieved",
		type: "legendary"
	},
	{
		id: 18,
		image: legendaryImage,
		name: "Commercial",
		description: "Create commercial website",
		progress: "notAchieved",
		type: "legendary"
	},
	{
		id: 19,
		image: rareImage,
		name: "Zustand Wizard",
		description: "Learn Zustand",
		progress: "notAchieved",
		type: "rare"
	},
	{
		id: 20,
		image: rareImage,
		name: "Query Master",
		description: "Learn GraphQL",
		progress: "notAchieved",
		type: "rare"
	},
	
]