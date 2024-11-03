import { Link } from "react-router-dom"
export const Navbar=()=>{
    return(
        <div>
                <nav className="bg-yellow-300 w-full p-2">
            <ul className="flex justify-around text-center text-2xl font-bold text-red-600" id="lists">
                <img src="https://cdn-icons-png.flaticon.com/512/10026/10026257.png" alt="no match"
                className="h-[40px] w-[40px] cursor-pointer"/>
                <li className="hover:border-2 border-blue-900 rounded-md hover:duration-300 scale-110"><Link to={"/"}>Home</Link></li>
                <li className="hover:border-2 border-sky-900 rounded-md hover:duration-300 scale-110"><Link to={"/products"}>Products</Link></li>
                <li className="hover:border-2 border-sky-900 rounded-md hover:duration-300 scale-110"><Link to={"/newblog"}>New Blog</Link></li>
            </ul>
                </nav>
        </div>
    )
}