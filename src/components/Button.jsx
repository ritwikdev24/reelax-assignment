const Button = ({ text, bgColor, textColor, border }) => {
  return (
    <button
      className={`px-5 py-2 rounded-md text-sm font-medium ${bgColor} ${textColor} ${border}`}
    >
      {text}
    </button>
  );
};

export default Button;