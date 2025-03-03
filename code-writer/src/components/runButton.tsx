// import { Button } from "@/components/ui/button"

//import { Button } from "./ui/button";

interface RunButtonHandler{
    onClick:()=>void;
}
const RunButton= ({onClick}:RunButtonHandler)=>{

    return (
        //<Button className="bg-white text-black">Run</Button>
        <button className="p-[3px] relative" onClick={onClick}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                 RUN
            </div>
        </button>
    )
}

export default RunButton;