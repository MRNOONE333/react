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

    const [blogs,setBlog]= useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

      const handleDelete=(id)=>{
        const newBlogs=  blogs.filter(blog => blog.id !== id);
        setBlog(newBlogs);
      }

      const [name,setName]= useState('mario');
    //   use effect 

    useEffect(()=>{
        console.log('use effect called');
        console.log(name);
        //this  controls depedency how ,what inffluences the useEffect behaviour. 
    } , [name]);

    return (
        <div className="home">
        
        {/* props usage */}
        <BlogList  blogs={blogs}  title="All Title!"  handleDelete={handleDelete}/> 
        {/* <BlogList  blogs={blogs.filter((blog)=>blog.author=== 'mario')}  title="Mario's Blog"/> */}

        <button onClick={()=> setName('luigi')}>change name</button>
        <p>{name}</p>


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