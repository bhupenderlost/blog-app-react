import { Link } from "react-router-dom"
import Base from "../Layouts/Base"

export default function PageNotFound() {

    return(
       <Base pageTitle="Page Not Found">
            <div className="h-[85vh] w-screen flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl font-bold p-2">
                    Oops! Page Not Found
                </h1>
                <h2 className="text-lg p-2 font-semibold">
                    It looks like the page you're looking for doesn't exist.
                </h2>
                <p className="py-8">
                    Try searching for something else or go back <Link className="underline text-[#5995ED] font-bold" to={'/'}>Home</Link>.
                </p>
            </div>
       </Base>
    )
}