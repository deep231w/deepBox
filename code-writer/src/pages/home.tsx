import CodeWriter from "../components/codeWriter";
import OutputRender from "../components/outputRender";
import Card from "../components/card";

const Home = () => {
    return (
        <div className="h-screen flex flex-col bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Code Editor</h1>

            <div className="flex flex-grow gap-4">
                <div className="w-1/2">
                    <Card>
                        <CodeWriter />
                    </Card>
                </div>

                <div className="w-1/2">
                    <Card>
                        <OutputRender />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;
