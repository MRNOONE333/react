import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const BlogDetails =()=>{
    const {id} = useParams();
    const {data:blog,isPending,error} = useFetch('http://localhost:8000/blogs/' + id);

    return(
        <div className="blog-details">
        {error && <div>{error}</div>}
        {isPending && <div>Loading.....</div>}
        {/* props usage */}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.body}</p>
            </article>
        ) }
        </div>
    );
}
export default BlogDetails