const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" border-2 border-solid rounded-md p-4 h-full">
            {children}
        </div>
    );
};

export default Card;
