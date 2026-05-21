import Navbar from "../components/Navbar";
import BillingForm from "../components/BillingForm";
import OrderSummary from "../components/OrderSummary";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left */}
          <div className="w-full lg:w-[70%]">
            <BillingForm />
          </div>

          {/* Right */}
          <div className="w-full lg:w-[30%]">
            <OrderSummary />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;