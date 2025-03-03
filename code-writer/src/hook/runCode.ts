import axios from "axios";
import { useState } from "react"




const useRuncode= ()=>{
    const [output , setOutput]=useState<string | null>(null)
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState<string | null>(null);

    const runCode= async(code:string, language:string)=>{
            try{
                const Response= await axios.post("http://localhost:3000/run",{
                    code,
                    language
                })
                console.log("output:",Response.data.output);
                setOutput(Response.data.output);

            }catch(e:any){
                console.log("error during post request : ", e);
                setError(e);

            }finally{
                setLoading(false)
            }
        }

    return {loading,error,output,runCode}
}

export default useRuncode;