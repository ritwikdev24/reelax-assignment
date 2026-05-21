import InputField from "./InputField";
import Button from "./Button";

const BillingForm = () => {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-200 flex-1">

      <h1 className="text-3xl font-bold mb-2">
        Review your details
      </h1>

      <p className="text-gray-500 mb-8">
        Billing Information
      </p>

      <div className="grid grid-cols-2 gap-5">

        <InputField
          label="Company Name"
          placeholder="Company Name"
        />

        <InputField
          label="Email"
          placeholder="Email"
        />

        <InputField
          label="GST Number"
          placeholder="GST Number"
        />

        <InputField
          label="PAN Number"
          placeholder="PAN Number"
        />

        <InputField
          label="Premise/House no."
          placeholder="Premise"
        />

        <InputField
          label="Street"
          placeholder="Street"
        />

        <InputField
          label="State"
          placeholder="State"
        />

        <InputField
          label="City"
          placeholder="City"
        />

        <InputField
          label="Country"
          placeholder="Country"
        />

        <InputField
          label="Pin Code"
          placeholder="Pin Code"
        />
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <Button
          text="Cancel"
          bgColor="bg-white"
          textColor="text-black"
          border="border border-gray-300"
        />

        <Button
          text="Save Details"
          bgColor="bg-blue-600"
          textColor="text-white"
        />
      </div>
    </div>
  );
};

export default BillingForm;