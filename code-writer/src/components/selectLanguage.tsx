import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface SelectHandler{
    onChange:(value:string)=>void;
}
  
const SelectLanguage= ({onChange}:SelectHandler)=>{
    
    return (
        <div>
            <Select onValueChange={onChange}>

                <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder="Select Language" className="text-gray-400"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="c++">Cpp</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectLanguage;