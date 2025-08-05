import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

interface SelectHandler{
    onChange:(value:string)=>void;
}
  
const SelectLanguage= ({onChange}:SelectHandler)=>{
    
    return (
        <div>
            <Select onValueChange={onChange} defaultValue="cpp">

                <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder="select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Language</SelectLabel>
                    <SelectItem value="cpp">C++</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectLanguage;