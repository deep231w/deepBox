import CodeWriter from "../components/codeWriter";
import OutputRender from "../components/outputRender";
import Card from "../components/card";
import SelectLanguage from "@/components/selectLanguage";
import RunButton from "@/components/runButton";
import Navbar from "@/components/navbar";
const Home = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-400 text-white">
            <Navbar />
            <div className="flex flex-grow p-2 ">
                <div className="flex-1">
                        <Card>
                            <CodeWriter />
                        </Card>
                </div>
                <div className="w-1/3 flex flex-col gap-4">
                    <div className="flex gap-20 pl-20">
                        <SelectLanguage/>
                        <RunButton/>
                    </div>
                        <Card>
                            <OutputRender />
                        </Card>
                </div>
            </div>
        </div>

    );
};

export default Home;
