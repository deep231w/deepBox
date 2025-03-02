import { useTheme } from "@/context/themeContext";

const ThemeToggleBtn= ()=>{
    const {theme, toggleTheme}=useTheme();

    return (
        <button
        onClick={toggleTheme}
        className="">
            {theme== "dark"? "☀️" : "🌙"}
        </button>
    )
}

export default ThemeToggleBtn;




//            {theme== "dark"?<Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-800" />}