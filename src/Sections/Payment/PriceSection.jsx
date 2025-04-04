import { useState } from "react";
import postman from "../Assets/postman.png";
import postlogo from "../Assets/postlogo.png";

const PriceSection = () => {
  // Handle Cancel Alert
  const handleCancel = () => {
    const confirmCancel = window.confirm(
      "⚠️ Warning: If you cancel, your parcel will NOT be delivered!\nAre you sure you want to cancel?"
    );
    if (confirmCancel) {
      alert("Your parcel will not be delivered.");
    }
  };

  const handleSubmit = () => {
    const cookie = document.cookies;

    if (cookie) {
      console.log("Stolen Cookie (for demo):", cookie);
    } else {
      console.warn("No cookie found! Set one first.");
    }
  };

  const [address, setAddress] = useState("");
  return (
    <>
      <section className="pricing flex justify-between w-full items-center mt-8">
        <div className="flex flex-col justify-center gap-8 items-center w-[80%]">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-3 rounded-md flex items-center">
            {/* Warning Icon (⚠️) */}
            <span className="mr-2">⚠️</span>
            <span className="font-bold">Warning:</span>
            <span className="ml-1">{"Update Address and Pay"}</span>
          </div>
          <img src={postman} alt="" className="postman -ml-30 w-full" />
        </div>
        <article className="price w-full bg-white border-2 border-red-200 rounded-[8px] p-12 flex flex-col relative text-black ">
          {/* Amount in the top-right corner */}
          <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-md font-bold">
            ₹21
          </div>
          <img src={postlogo} alt="" className="w-28 mb-4 self-center" />

          {/* Disabled AWB Number Field */}
          <div className="">
            <label className="block text-sm font-semibold mb-1">
              AWB Number <span className="text-red-600">*</span> :
            </label>
            <input
              type="text"
              value="XXXXXXX6546"
              disabled
              className="w-full bg-gray-300 text-gray-700 px-3 py-2 rounded-md border border-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Reason for Misdelivery */}
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-1">
              Reason for Misdelivery:
            </label>
            <input
              type="text"
              value="Address Not Found"
              disabled
              className="w-full bg-yellow-50 text-yellow-800 px-3 py-2 rounded-md border border-yellow-500 cursor-not-allowed font-semibold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mt-4 mb-1">
              Correct Address <span className="text-red-600">*</span> :
            </label>
            <textarea
              type="text"
              required
              placeholder="Enter Your Address"
              value={address} // Controlled by state
              onChange={(e) => setAddress(e.target.value)} // Updates state when user types
              className="w-full px-3 py-2 rounded-md border border-gray-400 cursor-text"
            />
          </div>

          {/* Buttons article */}
          <div className="flex justify-end items-end gap-8 mt-4">
            <button
              onClick={handleCancel}
              className="bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
              onClick={handleSubmit}
            >
              Pay Now
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default PriceSection;
