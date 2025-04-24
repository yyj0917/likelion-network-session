import { Home, Undo2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useNavigate();
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
            <header className='relative w-[600px] h-auto text-[#2A2A6F] text-2xl font-bold text-center'>
                <h1>2025.05.22 FrontEnd 통신 세션</h1>
                <h3 className='text-lg font-semibold'>(부제 : 신촌 맛집 추천)</h3>
                <span 
                    className='absolute size-10 z-50 top-[40%] left-2 rounded-full border border-[#2A2A6F] bg-white flex items-center justify-center hover:bg-gray-100 cursor-pointer'
                    onClick={()=>router(-1)}>
                    <Home />
                </span>
            </header>
            <main className='relative w-[600px] h-[500px] border-4 border-orange-500 rounded-xl aspect-square with-logo-bg'>
                {children}
            </main>
        </div>
    )
}