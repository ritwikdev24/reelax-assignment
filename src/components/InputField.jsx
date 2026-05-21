const InputField = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-[#374151]">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="
          border border-[#D1D5DB]
          rounded-md
          px-4
          py-3
          outline-none
          text-sm
          focus:border-[#2563EB]
          transition-all duration-200
        "
      />
    </div>
  );
};

export default InputField;