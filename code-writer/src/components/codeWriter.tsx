import { Editor } from "@monaco-editor/react";

const CodeWriter= ()=>{

    return <>

    <Editor
        height={"90vh"}
        defaultLanguage="javascript"
        defaultValue="//some comment 
console.log('hello world')"
        className="border-none bg-transparent"
    />

    </>
}

export default CodeWriter;