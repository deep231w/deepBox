import CodeWriter from "../components/codeWriter";
import OutputRender from "../components/outputRender";
import Card from "../components/card";
import SelectLanguage from "@/components/selectLanguage";
import RunButton from "@/components/runButton";
import Navbar from "@/components/navbar";
import { useState } from "react";
import useRuncode from "@/hook/runCode";
const Home = () => {
    const [language, setLanguage]= useState<string| null>("JavaScript");

    console.log("selected language:", language);
    const [code, setCode]=useState<string | "">("");

    console.log("code:", code);
    const {runCode}=useRuncode();

    return (
        <div className="h-screen flex flex-col bg-gray-900 text-white dark:bg-white">
            <Navbar />
            <div className="flex flex-grow p-2">
                <div className="flex-1 ">
                        <Card>
                            <CodeWriter value={code} onChange={setCode}/>
                        </Card>
                </div>
                <div className="w-1/3 flex flex-col gap-4">
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
