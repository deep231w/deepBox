import CodeWriter from "../components/codeWriter";
import OutputRender from "../components/outputRender";
import { Card } from "@/components/ui/card";
import SelectLanguage from "@/components/selectLanguage";
import RunButton from "@/components/runButton";
import Navbar from "@/components/navbar";
import { useState } from "react";
import useRuncode from "@/hook/runCode";


const Home = () => {
    const [language, setLanguage]= useState<string| null>("cpp");

    console.log("selected language:", language);
    const [code, setCode]=useState<string | "">("");

    console.log("code:", code);
    const {runCode}=useRuncode();

    return (
        <div className="h-screen flex flex-col bg-neutral-900	 text-white dark:bg-white">
            <Navbar />
            <div className="flex flex-row flex-1 overflow-hidden">
                <div className="flex-1 p-4 overflow-hidden">
                        <Card className="h-full bg-neutral-900">
                            <CodeWriter value={code} onChange={setCode}/>
                        </Card>
                </div>
                <div className=" flex flex-col gap-1">
                    <div className="flex gap-20 pl-20">
                        <SelectLanguage onChange={setLanguage}/>

                        <RunButton onClick={()=>runCode({code,language})}/>

                    </div>
                    <div className="pl-2 h-full">
                        <Card>
                            <OutputRender />
                        </Card>
                    </div>
                        
                </div>
            </div>
        </div>

    );
};

export default Home;
