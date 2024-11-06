import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
export const Footer=()=>{
    return(
        <div className="flex justify-evenly bg-blue-300 m-3">
            <div>
                <ul>
                    
                    <li className="font-medium hover:text-blue-950">About Us</li>
                    <li className="font-medium hover:text-blue-950">Press</li>
                    <li className="font-medium hover:text-blue-950">Support</li>
                    <li className="font-medium hover:text-blue-950">Contact</li>
                </ul>
            </div>
            <div>
                <ul>
                <h1  className="text-lg font-semibold text-red-700">Cloneables</h1>
                <li className="font-medium hover:text-blue-950">All Products</li>
                <li className="font-medium hover:text-blue-950">Templates</li>
                <li className="font-medium hover:text-blue-950">Assests</li>
                <li className="font-medium hover:text-blue-950">UI Kits</li>
                </ul>
            </div>
            <div>
                <ul>
                <h1  className="text-lg font-semibold text-red-700">Resources</h1>
                <li className="font-medium hover:text-blue-950">Learning Centre</li>
                <li className="font-medium hover:text-blue-950">Promotion</li>
                <li className="font-medium hover:text-blue-950">Inspirations</li>
                <li className="font-medium hover:text-blue-950">Videos & Submit</li>
                </ul>
            </div>
            <div className="flex">
                <ul className="text-[23px]">
                <h1  className="text-lg font-semibold text-red-700">Follow Our Socials</h1>
                <li className="font-medium hover:text-blue-950"><FaSquareTwitter /></li>
                <li className="font-medium hover:text-blue-950"><FaFacebook /></li>
                <li className="font-medium hover:text-blue-950"><FaSquareInstagram /></li>
                <li className="font-medium hover:text-blue-950"><FaFacebookMessenger /></li>
                
                </ul>
                </div>   
            </div>
    )
}