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
        height={"90vh"}
        defaultLanguage="javascript"
        defaultValue="//some comment 
console.log('hello world')
"
        className="border-none bg-transparent"
        value={value}
        theme={theme=== "dark" ? "light" :"vs-dark"}
        onChange={(newValue)=> onChange(newValue || "")}
    />

    </>
}

export default CodeWriter;