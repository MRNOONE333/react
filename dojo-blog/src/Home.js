import { useState } from "react";

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

    const [blog,setBlog]= useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    return (
        <div className="home">
        <h1>Homeeee</h1>
        {
            blog.map((blog)=>(
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                </div>
            ))
        }
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