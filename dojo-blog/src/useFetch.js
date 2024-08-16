// this is a costume hook -- 
import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [data,setData]= useState(null);
    const [isPending,setIsPending ]= useState(true);
    const [error,setError] = useState(null);

    //   use effect 
    useEffect(()=>{
        setTimeout(() => {
          fetch(url)
          // this is async
            .then(res=>{
              console.log(res);
              if(!res.ok){
                console.log('cant fetch the resource---' );
              }
              return res.json();// this is also async
            })
            //no problem if names clash in .then(data and const [data,setData]= useState(null);
            .then(data=>{
              console.log(data);
              setData(data);
              setIsPending(false);
              setError(null);
            }
            )
            .catch((err)=>{
              // console.log(err.message);
              setError(err.message);
              setIsPending(false);
            })
        }, 1000);
        // remove this 1000 ms, its for devlopment understanding.
          // []--> this  controls depedency how ,what inffluences the useEffect behaviour. 
      } , [url]);
      return {data,isPending,error}
}

export default useFetch;