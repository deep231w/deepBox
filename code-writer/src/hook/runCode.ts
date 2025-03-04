import axios from "axios";
import { useState } from "react"

interface RunHandler{
    code:String | "";
    language:string | null;
}
const useRuncode= ()=>{
    const [output , setOutput]=useState<string | null>(null)
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState<string | null>(null);

    const runCode= async({code, language}:RunHandler)=>{
            try{
                // const codeinString= JSON.stringify(code);
                // console.log("code in string",codeinString);

                const Response= await axios.post("http://localhost:3000/run",{
                    code:JSON.stringify(code),
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