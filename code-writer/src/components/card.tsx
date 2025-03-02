const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-gray-600 p-4 rounded shadow-lg h-full">
            {children}
        </div>
    );
};

export default Card;
