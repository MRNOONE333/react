const BlogList = ({blogs,title}) => {

    // alternate syntax
    // const BlogList = (props) => {
    //     const blogs = props.blogs;
    //     const title= props.title;

    return ( 
        <div className="blog-title">
        <h1>{title}</h1>
        {
            blogs.map((blog)=>(
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <p>Written by {blog.author} </p>
                </div>
            ))
        }
        </div>
     );
}

export default BlogList;