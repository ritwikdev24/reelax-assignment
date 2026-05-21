import CouponCard from "./CouponCard";

const OrderSummary = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 w-[360px]">

      <h2 className="text-2xl font-bold mb-5">
        Order Summary
      </h2>

      <div className="border border-gray-300 rounded-xl p-5 mb-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">
              ₹4,999
            </h1>

            <p className="text-sm text-gray-500">
              /month
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-blue-600 font-semibold">
              SELECTED PLAN
            </p>

            <h3 className="font-bold">
              Startup
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-4">

        <CouponCard
          title="WELCOME20"
          desc="20% off first month"
          active={true}
        />

        <CouponCard
          title="ANNUAL50"
          desc="50% off annual plan"
        />

      </div>

      <div className="mt-6 border-t pt-5 space-y-3">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹14,999</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹1,079</span>
        </div>

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span className="text-blue-600">
            ₹16,078
          </span>
        </div>

        <button className="bg-blue-600 text-white w-full py-3 rounded-lg mt-4">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;