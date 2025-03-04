import { exec } from "child_process";
import fs from "fs";

const ExecuteCode = (filepath: string, language: string) => {
  try {
    let command = "";

    if (language === "cpp") {
      //command = `docker run --rm -v "${filepath}:/app/temp.cpp" -w /app gcc:latest sh -c "g++ temp.cpp -o temp && ./temp"`;
      command = `g++ ${filepath} -o output && ./output`;

    } else if (language === "py") {
      //command = `docker run --rm -v "${filepath}:/app/temp.py" -w /app python:latest python3 temp.py`;
      command = `python3 ${filepath}`;
    } else {
      console.error("Unsupported language:", language);
      return;
    }

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Execution error:", error);
        return;
      }
      console.log("Output:", stdout);
      if(stdout){
        return stdout;
      }
      console.error("Errors:", stderr? stderr:"no error");
      fs.unlink(filepath, (err)=>{
        if(err){
            console.log("error during file deletion= ",err.message);

        }
        else{
            console.log(`${filepath} deleted`);
        }
      })
    });
  } catch (e) {
    console.log("Server error during code execution", e);
  }
};

export default ExecuteCode;
