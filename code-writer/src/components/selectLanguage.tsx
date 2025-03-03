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

    return (
        <div>
            <Select onValueChange={(value)=> setLanguage(value)}>
                
                <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder="Select Language" className="text-gray-400"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">C++</SelectItem>
                    <SelectItem value="dark">Python</SelectItem>
                    <SelectItem value="system">JavaScript</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectLanguage;