
const Button = ({ text, onClick, style }) => {
    return (
        <button
        onClick={onClick}
        className={`px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded ${style}`}
        >
        {text}
        </button>
    );
};

export default Button;
