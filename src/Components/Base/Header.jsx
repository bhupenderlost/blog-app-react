import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div className={`w-screen flex flex-row justify-between h-[10vh] items-center bg-[#5995ED] ${props.pageTitle === "Home" ? '' : "fixed"}`}>
            <div className="w-1/3">
                <div onClick={props.setMenu} className="space-y-1.5 p-3 bg-white rounded-xl w-[70px] h-[55px] mx-2 hover:cursor-pointer hover:shadow-2xl">
                    <span className={`block h-[6px] w-12 bg-[#5995ED] rounded-2xl`}></span>
                    <span className={`block h-[6px] w-8 bg-[#5995ED] rounded-2xl`}></span>
                    <span className={`block h-[6px] w-9 bg-[#5995ED] rounded-2xl`}></span>
                </div>
            </div>
            <div className="w-1/3 text-center">
               <Link to={'/'} className='text-white text-2xl xl:text-4xl font-bold'>
                    DevDigest
                </Link>
            </div>
            <div className="w-1/3 flex justify-end">
               
            </div>
        </div>
    )
}