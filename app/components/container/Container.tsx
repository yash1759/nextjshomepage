const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className="px-4  text-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 backdrop-blur-sm">{children}</div>;
};

export default Container;