import { Editor } from "@monaco-editor/react";
import { useTheme } from "@/context/themeContext";

interface CodeHandler{
    value:string,
    onChange:(value:string)=>void
}
const CodeWriter= ({value,onChange}:CodeHandler)=>{

    const {theme}= useTheme();

    return <>

    <Editor
        height={"100vh"}
        defaultLanguage="cpp"
        defaultValue="#include <iostream>
int main() {
    std::cout << 'Hello World';
    return 0;
}
"
        className="border-none bg-transparent"
        value={value}
        theme={theme=== "dark" ? "light" :"vs-dark"}
        onChange={(newValue)=> {
            onChange(newValue || "")
            console.log("code inside the code writer component-", newValue)
        }}
    />

    </>
}

export default CodeWriter;