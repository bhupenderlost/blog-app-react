import { Link } from "react-router-dom"

export default function Post(props) {

    return (
        <>
            {
                props.posts.map((item, index) => {

                    return (

                        <div 
                            key={index} 
                            className="w-[400px] shadow-lg rounded min-h-[300px] p-2 hover:shadow-xl"
                        >
                            <img 
                                src={item.cover_image ? item.cover_image : "https://placehold.co/1000x420" } 
                                alt={item.title} 
                                loading="lazy" 
                                onClick={() => props.navigate(item.id)} 
                            />

                            <Link to={`/blog/${item.id}`} className="font-bold text-xl hover:underline py-2">{item.title}</Link>
                            <p className="py-2">{item.description}</p>

                            <div className="flex flex-row gap-2 justify-between">
                                <p><span className="font-semibold">Author:</span> <a href={`https://dev.to/${item.user.username}`} className="hover:underline" target="_blank" rel="noopener noreferrer">{item.user.name}</a></p>
                                <p><span className="font-semibold">Date:</span> {item.published_at.split("T")[0]}</p>
                            </div>
                            
                        </div>
                        
                    )

                })

            }
        </>
    )
}