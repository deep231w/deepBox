const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg h-full">
            {children}
        </div>
    );
};

export default Card;
