const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-[#0a0f1f] shadow-md border-b border-gray-700">
            <div className="text-3xl font-mono font-bold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DeepBox
            </div>
            <div className="flex items-center space-x-4">
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
                    🌙
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
