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
    const [code, setCode]=useState<string >(
        `#include <iostream>
int main() {
    std::cout << "Hello World";
    return 0;
}`
    );

    console.log("code:", code);
    const {runCode}=useRuncode();

    return (
        <div className="h-screen flex flex-col bg-neutral-900	 text-white dark:bg-white">
            <Navbar />
            <div className="flex flex-col sm:flex-row flex-1 overflow-hidden gap-1 ">
                <div className="flex-1 overflow-hidden">
                        <Card className="h-full bg-neutral-900">
                            <CodeWriter value={code} onChange={setCode}/>
                        </Card>
                </div>
                <div className=" flex flex-col gap-1 lg:w-80 xl:w-100">
                    <div className="flex justify-between gap-1">
                        <SelectLanguage onChange={setLanguage}/>

                        <RunButton onClick={()=>runCode({code,language})}/>

                    </div>
                    <div className=" h-full">
                        <Card className="h-full bg-neutral-900">
                            <OutputRender />
                        </Card>
                    </div>
                        
                </div>
            </div>
        </div>

    );
};

export default Home;
