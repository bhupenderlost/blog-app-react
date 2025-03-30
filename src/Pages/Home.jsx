import Base from "../Layouts/Base"
import Search from '../Components/Home/Search'
import { useState } from "react"
import { handleSearchApi } from "../Helpers"
import { useNavigate } from "react-router-dom"

export default function Home() {


    const navigate = useNavigate()

    //Topics
    const [topics, setTopics] = useState([
        { id: 1, title: 'Docker', searchValue: 'docker'},
        { id: 2, title: 'React', searchValue: 'react'},
        { id: 3, title: 'AWS', searchValue: 'aws'},
        { id: 4, title: 'Go Lang', searchValue: 'go'},
        { id: 6, title: 'Cloud Computing', searchValue: 'cloud'},
        { id: 7, title: 'Machine Learning', searchValue: 'ml'},
    ])

    //Navigates to the search page with the param: searcgValue
    const handleSearch = async (searchValue) => {

        navigate(`/search/${searchValue}`)
    }

    return(
       <Base pageTitle="Home">
            {/* Search Component */}
            <Search 
                topics={topics ? topics : []} 
                searchHandle={handleSearch}
            />
       </Base>
    )
}