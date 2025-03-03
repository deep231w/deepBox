import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react";

  
const SelectLanguage= ()=>{
    const [language ,setLanguage]= useState<string | undefined>(undefined)
    console.log("language selected= ", language);
    return (
        <div>
            <Select onValueChange={(value)=> setLanguage(value)}>

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