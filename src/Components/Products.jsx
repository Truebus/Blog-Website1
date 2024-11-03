import { useState,useEffect } from "react"
import { LuLoader } from "react-icons/lu";
import { Link } from "react-router-dom";
export const Products=()=>{
    const[storedata,setStoredata]=useState({products:[]});
    const[Isloading,setIsLoading]=useState(true);
    useEffect(()=>{
        const handledata=async()=>{
            try{
            const data=await fetch(`https://dummyjson.com/products`);
            if(!data.ok){
                throw new Error("Sorry, Data Not Found");
            }
            const response=await data.json();
            setStoredata(response);
        }
        catch(err){
            console.log(err.message)
        }
        finally{
            setIsLoading(false)
        }
    }
    handledata();
    },[])
    return(
        
        <div>
            {Isloading ? (
             <h1 className="h-96 w-full text-8xl flex justify-center p-20 items-center" ><LuLoader className="inline-block"/></h1>
            ):(
            <div>
                <h1 className="text-3xl text-center text-green-500 font-bold">This is Product Page.</h1>
                <div className="flex flex-wrap h-auto w-full p-2 justify-center">
                        {storedata.products.map((x)=>(
                               <div   key={x.id} className="bg-gradient-to-tl from-pink-400 border-t-violet-600  h-auto w-[250px] p-4 m-2  rounded-lg
                               shadow-blue-500 shadow-lg hover:-translate-y-3 duration-300 scale-100">
                         <Link to={`/blog/${x.id}`}>   <h1 className="text-orange-600 font-semibold hover:text-blue-900 text-center">
                                 {x.title}  </h1></Link>
                            <img className="border-2 border-black rounded-lg h-[200px] w-[220px]" src={x.images[0]} alt="no found"/>
                            <p className="text-justify">{x.description}</p>
                            </div>
                        ))}
                </div>
     </div>
     )}
        </div>
    )

}
