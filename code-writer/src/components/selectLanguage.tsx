import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
const SelectLanguage= ()=>{

    return (
        <div>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Language" />
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