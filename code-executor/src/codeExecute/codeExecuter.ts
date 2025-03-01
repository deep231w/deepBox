import { exec } from "child_process";

const ExecuteCode = (filepath: string, language: string) => {
  try {
    let command = "";

    if (language === "cpp") {
      command = `docker run --rm -v "${filepath}:/app/temp.cpp" -w /app gcc:latest sh -c "g++ temp.cpp -o temp && ./temp"`;
    } else if (language === "py") {
      command = `docker run --rm -v "${filepath}:/app/temp.py" -w /app python:latest python3 temp.py`;
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
      console.error("Errors:", stderr);
    });
  } catch (e) {
    console.log("Server error during code execution", e);
  }
};

export default ExecuteCode;
