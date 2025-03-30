import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useInView } from "react-intersection-observer"

import Base from "../Layouts/Base"
import Post from "../Components/Cards/Post"
import { getAll } from "../Helpers"

export default function Blogs() {


    const navigate = useNavigate()

    //Init The State
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const { ref, inView } = useInView()

    //Fetch Data Function
    const fetchData = useCallback(async () => {

        //If Doesnt have More posts
        if (!hasMore) return

        //Calls the api
        const response = await getAll(page)

        
        if (response.length > 0) {
            setData(prev => [...prev, ...response])
            setPage(prev => prev + 1)
        } else {
            setHasMore(false)
        }

    }, [page, hasMore])


    useEffect(() => {
        if (inView) {
            fetchData()
        }
    }, [inView, fetchData])

    //takes to the single page view
    const viewBlog = (id) => {
        navigate(`/blog/${id}`)
    }

    return (
        <Base pageTitle="Blogs">
            <div className="min-h-[95vh] pt-[12vh]">
        
                <div className="flex flex-row flex-wrap gap-6 justify-center mx-2">
                    <Post navigate={viewBlog} posts={data ? data : []} />
                </div>
                {
                    hasMore && (
                        <div ref={ref} className="animate-pulse w-[400px]">
                            <div className="bg-gray-300 w-full h-[200px] rounded"></div>
                            <div className="h-6 bg-gray-300 rounded w-3/4 my-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-full my-2"></div>
                            <div className="h-4 bg-gray-300 rounded w-5/6 my-2"></div>
                            <div className="flex justify-between mt-4">
                                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                            </div>
                        </div>
                    )
                }
                {
                    !hasMore && <p className="text-center text-gray-500 mt-4 py-4">No more posts</p>
                }
            </div>
        </Base>
    )
}