type CustomLabelProps = {
    children: React.ReactNode;
    className?: string;
};

const CustomLabel: React.FC<CustomLabelProps> = ({ children, className = "" }) => (
    <div className={`inline-block px-4 py-2 rounded-full font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] ${className}`}>
        {children}
    </div>
);

export default CustomLabel;