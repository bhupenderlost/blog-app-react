import { useEffect, useState } from "react"
import Base from "../Layouts/Base"
import { getSingleBlog } from "../Helpers"
import { useParams } from "react-router-dom"
import { ArrowPathIcon } from "@heroicons/react/24/solid"

export default function SingleBlog() {


    const params = useParams()

    //init the state
    const [data, setData] = useState(null)


    useEffect(() => {

        //calls the single post api
        getSingleBlog(params.id)
            .then(data => {
                setData(data)
                window.document.title = data.title
            })
            .catch(err => console.log(data))


    }, [])

    return (
        <Base pageTitle="Single">
            {
                !data ? <div className="flex justify-center items-center h-screen z-50 fixed left-0 top-0 w-screen  bg-white "><ArrowPathIcon className="size-12 text-black animate-spin" /></div> :
                    <div className="min-h-[95vh] pt-[12vh] overflow-x-hidden">
                        <h1 className="p-4 text-2xl font-bold">{data.title}</h1>
                        <img
                            src={data.cover_image ? data.cover_image : "https://placehold.co/1000x420"}
                            alt={data.title}
                            loading="lazy"
                            className="p-4"
                        />
                        <div className="flex flex-row gap-2 justify-between p-4">
                            <p><span className="font-semibold">Author:</span> <a href={`https://dev.to/${data.user.username}`} className="hover:underline" target="_blank" rel="noopener noreferrer">{data.user.name}</a></p>
                            <p><span className="font-semibold">Date:</span> {data.published_at.split("T")[0]}</p>
                        </div>
                        <div className="p-4" dangerouslySetInnerHTML={{ __html: data.body_html }}></div>
                    </div>
            }
        </Base>
    )
}