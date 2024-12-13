export type questsType = {
    id:number,
    name:string,
    description:string,
    rewards: number[]
}
export const questsList: questsType[] = [
    {
        id:1,
        name: "Learn Node.js",
        description: "Build fullstack site using Node.js. Make connection with database",
        rewards: [5,40]
    },
    {
        id:2,
        name: "Learn MongoDB and SQL",
        description: "Learn how to use and connect databases",
        rewards: [10,25]
    }
]