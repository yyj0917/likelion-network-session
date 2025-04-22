import { useNavigate } from "react-router-dom"


export default function HomePage() {
    const router = useNavigate()
    const routeArr = [
        { name: "GET", path: "/get" },
        { name: "POST", path: "/post" },
        { name: "PATCH", path: "/patch" },
        { name: "DELETE", path: "/delete" },
    ]
    return (
        <div className='p-10 w-full h-full flex flex-wrap gap-4'>
            {routeArr.map((item) => {
                return (
                    <button 
                        key={item.name} 
                        className='w-full border border-orange-300 rounded-xl text-orange-500 cursor-pointer hover:bg-orange-200 transition-colors duration-500 text-2xl font-bold' 
                        onClick={() => {
                            router(item.path)
                        }}>
                        {item.name}
                    </button>
                )
            })}
        </div>
    )
}