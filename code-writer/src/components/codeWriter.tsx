import { Editor } from "@monaco-editor/react";
import { useTheme } from "@/context/themeContext";

const CodeWriter= ()=>{
    const {theme}= useTheme();

    return <>

    <Editor
        height={"90vh"}
        defaultLanguage="javascript"
        defaultValue="//some comment 
console.log('hello world')
"
        className="border-none bg-transparent"
        theme={theme=== "dark" ? "light" :"vs-dark"}
    />

    </>
}

export default CodeWriter;