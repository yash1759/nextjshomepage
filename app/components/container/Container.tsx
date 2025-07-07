const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="container w-[80%] mx-auto">{children}</div>;
};

export default Container;