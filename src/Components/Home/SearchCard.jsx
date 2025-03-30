import { Link } from "react-router-dom"

export default function SearchCard(props) {
    
    return (
        <>
            <div className="flex flex-row flex-wrap gap-2 my-4 justify-center">

                <Link to={`/blogs`} className="p-1.5 bg-white rounded " >
                    <p className="text-sm text-[#5995ED] font-bold hover:cursor-pointer hover:shadow-2xl hover:text-[15px] transition-all duration-300">Latest Posts</p>
                </Link>

                {
                    props.topics.map((item) => {

                        return (
                            <Link to={`/search/${item.searchValue}`} className="p-1.5 bg-white rounded " key={item.id}>
                                <p className="text-sm text-[#5995ED] font-bold hover:cursor-pointer hover:shadow-2xl hover:text-[15px] transition-all duration-300">{item.title}</p>
                            </Link>
                        )

                    })
                }

            </div>
        </>
    )
}