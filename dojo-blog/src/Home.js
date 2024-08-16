import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home =() =>{
    
    //click event lec7
    // const handelclick=()=>{
    //     console.log('clickeddddddd');
    // }

    // const handelclickagain=(name)=>{
    //     console.log('hello', name);
    // }

    //set state hook lec 8
    // const [name,setName] = useState('mario');

    // const clickHandelthree=()=>{
    //     setName('wow');
    // }


    // grab the data but cal it blogs or we can pass data here-{blogs && <BlogList  blogs={data} 
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">

        {/*ONly if there is an value for an error then it will show in the web page--*/}
        {error && <div>{error}</div>}
        {isPending && <div>Loading.....</div>}
        {/* props usage */}
        {blogs && <BlogList  blogs={blogs}  title="All Title!" /> }
        
        {/* <BlogList  blogs={blogs.filter((blog)=>blog.author=== 'mario')}  title="Mario's Blog"/> */}



        {/*<p>{name}</p>*/}
        {/*<button onClick={clickHandelthree}>change name</button>*/}
        {/* click event */}
        {/*<button onClick={handelclick}>Click me</button>*/}
        {/* anonymous function */}
        {/*<button onClick={()=>handelclickagain('yooo')}>click me again</button>*/}



        </div>
    );
}

export default Home;