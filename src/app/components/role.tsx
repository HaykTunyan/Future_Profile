import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] })


export const role = [
    {
        title: 'React JS',
    },
    {
        title: 'JavaScript',
    },
    {
        title: 'React Native',
    },
    {
        title: 'Angular 2+',
    },
    {
        title: 'Next JS',
    },
    {
        title: 'TypeScript',
    },
    {
        title : 'React Redux',
    },
    {
        title: 'ES 6',
    },
    {
        title: 'HTML5',
    },
    {
        title: 'CSS3',
    },
    {
        title: 'SASS',
    },
    {
        title: 'Tailwind Css',
    },
    {
        title: 'Material UI',
    },
    {
        title: 'Css Frameworks',
    },
    {
        title : 'REST API'
    },
    {
        title : 'Web3 JS'
    },
    {
        title : 'WebSocket'
    }

]


export default function Role() {
    return (
        <div className=" flex flex-col bg-white shadow-lg rounded-lg w-full px-4 py-6">
            <div className="flex items-start">
                <h2 className="text text-gray-700 font-semibold  text-lg">
                Role and skills
                </h2>
            </div>
            <div className="flex w-full mt-5">
                <div className="flex flex-wrap gap-4">
                    {role?.map((item, index)  => (
                        <div className="shadow-2xl px-4 py-2 bg-black rouded-tl-3xl rounded-bl-3xl rounded-tr-3xl cursor-pointer hover:bg-slate-700 hover:opacity-80" key={index}>
                            <span className="text-white text-base font-semibold">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}