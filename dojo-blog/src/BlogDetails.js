import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

    const BlogDetails =()=>{
    const {id} = useParams();
    const {data:blog,isPending,error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handelClick=()=>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

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
                <button onClick={handelClick}>Delete</button>
            </article>
        ) }
        </div>
    );
}
export default BlogDetails