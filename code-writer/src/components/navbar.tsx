import ThemeToggleBtn from "./themeToggleBtn";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-1 shadow-md border-b border-white border-sm
        bg-gradient-to-r from-pink-500 via-orange-500 to-gray-500">
            <div className="text-3xl font-mono font-bold text-white bg-clip-text text-transparent 
            bg-gradient-to-r from-purple-400 to-blue-400 dark:text-gray-800 border-gray-700">
                DeepBox
            </div>
            <div className="flex items-center space-x-4">
                <ThemeToggleBtn />
            </div>
        </nav>
    );
};

export default Navbar;
