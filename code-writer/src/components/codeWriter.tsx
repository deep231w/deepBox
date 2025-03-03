import { Editor } from "@monaco-editor/react";
import { useTheme } from "@/context/themeContext";

const CodeWriter= ()=>{
    const {theme}= useTheme();
    function EditorHandler (value:string | undefined ){
        console.log(value);
    }
    return <>

    <Editor
        height={"90vh"}
        defaultLanguage="javascript"
        defaultValue="//some comment 
console.log('hello world')
"
        className="border-none bg-transparent"
        theme={theme=== "dark" ? "light" :"vs-dark"}
        onChange={EditorHandler}
    />

    </>
}

export default CodeWriter;