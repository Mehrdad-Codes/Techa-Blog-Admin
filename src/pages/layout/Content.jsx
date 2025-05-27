
const Content = ({ children }) => {
    return (
        <div
            className="flex grow flex-col overflow-auto py-10"
        >
            {children}
        </div>
    );
};

export default Content;