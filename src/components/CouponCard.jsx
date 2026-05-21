const CouponCard = ({ title, desc, active }) => {
  return (
    <div
      className={`border rounded-lg p-4 flex justify-between items-center ${
        active
          ? "border-blue-500"
          : "border-gray-300"
      }`}
    >
      <div>
        <h3 className="font-semibold text-sm">
          {title}
        </h3>

        <p className="text-xs text-gray-500">
          {desc}
        </p>
      </div>

      <div
        className={`w-5 h-5 rounded-full border ${
          active
            ? "border-blue-500 bg-blue-500"
            : "border-gray-400"
        }`}
      ></div>
    </div>
  );
};

export default CouponCard;