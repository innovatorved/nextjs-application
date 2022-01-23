import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-[#DFD8CA] p-4">
            <div className="text-blue-500 hover:text-blue-900 cursor-pointer lg:text-lg">
                <Link href="/" passHref><span className="font-serif">SuperHeros</span></Link>
            </div>
            <div className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link href="/add" className="flex justify-center text-sm font-serif hover:text-white  lg:text-lg " passHref>Create Hero</Link>
            </div>
        </nav>

    )
}