import { exec } from "child_process";

const ExecuteCode= (filepath:string, language:string)=>{

        try{
            const command= `docker run --rm -v "${filepath}:/app/temp.cpp" -w /app gcc:latest sh -c "g++ temp.cpp -o temp && ./temp"`;

            exec(command,stderr)
        }catch(e){
            console.log("server error during execute code", e);
        }
}