import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-[#DFD8CA] p-4">
            <div className="text-[#f83535] hover:text-white cursor-pointer lg:text-lg">
                <Link href="/"><span className="font-serif">SuperHeros</span></Link>
            </div>
            <div className="text-[#f83535] border-2 p-1 rounded-md">
                <Link href="/add" className="flex justify-center text-sm font-serif hover:text-white  lg:text-lg ">Create Hero</Link>
            </div>
        </nav>

    )
}
