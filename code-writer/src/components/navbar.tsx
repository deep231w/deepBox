import { Switch } from "./ui/switch";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-6 py-2 bg-zinc-800	 to-white text-white">
            <div className="text-xl font-bold">DeepBox</div>
            <div className="flex items-center gap-4">
                <Switch defaultChecked={true}
                
 />
            </div>
        </div>

    );
};

export default Navbar;
