import { useEffect, useState } from "react";
import BlogList from "./BlogList";

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

    const [blogs,setBlog]= useState(null);
    const [isPending,setIsPending ]= useState(true);

    //   use effect 

    useEffect(()=>{
      setTimeout(() => {
        fetch('http://localhost:8000/blogs')
        // this is async
          .then(res=>{
            return res.json();// this is also async
          })
          .then(data=>{
            console.log(data);
            setBlog(data);
            setIsPending(false);
          }
          );
      }, 1000);
        // []--> this  controls depedency how ,what inffluences the useEffect behaviour. 
    } , []);

    return (
        <div className="home">


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