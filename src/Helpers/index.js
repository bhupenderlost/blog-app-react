import axios from "axios"

//Base URL
const API_URL = 'https://dev.to/api/'

//Calls the search api (  uses tags to search)
export const handleSearchApi = async (searchValue, page) => {

    //Try-catch block
    try {

        //calls the api using axios
        const response = await axios.get(`${API_URL}articles?tag=${searchValue.split(" ")[0]}&per_page=10&page=${page ? page : 1}`)
        //returns the json data
        return response.data

    } catch (error) {
        //on error gives empty array
        return []
    }
}
//Calls the latest posts api 
export const getAll = async (page) => {
    //try-catch block
    try {
        //calls the api using axios
        const response = await axios.get(`${API_URL}articles/latest?per_page=10&page=${page ? page : 1}`)
        //returns the json data
        return response.data

    } catch (error) {
        //on error gives empty array
        return []
    }
}

//get single post using id
export const getSingleBlog = async (id) => {
    //try-catch block
    try {

        //calls the api using axios
        const response = await axios.get(`${API_URL}articles/${id}`)
        //returns the json data
        return response.data

    } catch (error) {
        //on error gives empty array
        return []
    }
}