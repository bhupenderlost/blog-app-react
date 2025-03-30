import { 
    MagnifyingGlassIcon 
} from "@heroicons/react/24/outline"
import SearchCard from "./SearchCard"

export default function Search(props) {

    const handleSearchSubmit = async (e) => {

        e.preventDefault()

        let searchValue = e.target.search.value || null

        if(!searchValue) return 

        props.searchHandle(searchValue)
    }

    return(
        <div className="bg-[#5995ED] bg-cover bg-center bg-blend-overlay w-screen h-[85vh] pt-20">

            <div className="w-screen flex flex-col justify-center items-center px-2">
                <h1 className="text-white text-4xl text-center font-bold py-2">
                    Explore, Learn, and Stay Inspired
                </h1>
                <p className="text-white text-center font-semibold py-2"> 
                    Search for insightful blogs, latest trends, and expert opinions—all in one place.
                </p>
            </div>

            <div className="w-screen flex flex-col justify-center items-center py-4">

                <form onSubmit={handleSearchSubmit} className="w-full">
                    <div className="flex flex-row items-center justify-center">
                        <input 
                            className="bg-white w-[80%] h-[70px] text-lg px-4 py-1 rounded-full outline-none shadow-xl" 
                            placeholder="Eg. API, Web Development etc" 
                            type="text" 
                            name="search" 
                            id="searchBar" 
                        />
                        <button
                            type="submit"
                            className="hover:cursor-pointer"
                        >
                            <MagnifyingGlassIcon
                                className="size-8 hover:p-1 transition-all duration-300 text-black -ml-12 bg-white rounded-full"
                            />
                        </button>
                    </div>
                    
                </form>

                <SearchCard topics={props.topics ? props.topics : []} />

            </div>
        </div>
    )
}