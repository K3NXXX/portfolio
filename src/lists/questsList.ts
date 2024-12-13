export type questsType = {
    id:number,
    name:string,
    description:string,
    rewards: number[]
}
export const questsList: questsType[] = [
    {
        id:1,
        name: "Develope dashboard for monitoring business",
        description: "Build fullstack website for monitoring business using NextJS",
        rewards: [35,70]
    },
    {
        id:2,
        name: "Develope Spotify clone",
        description: "Implement website for listening music using NextJS",
        rewards: [30,55]
    }
]