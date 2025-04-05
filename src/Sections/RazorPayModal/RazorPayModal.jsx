import React from "react";
import logo from "../NavBar/Assets/indianpost.svg";
import logobig from "./logobig.png";

// Payment Method Logos
import visa from "./visa.png";
import cross from "./cross.svg";
import mastercard from "./mastercard.png";
import rupay from "./rupay.png";
import phonepay from "./phonepay.png";
import bharatpay from "./bharatpay.png";
import gpay from "./gpay.png";
import Timer from "../Timer/Timer";
import CardForm from "./CardForm/CardForm";

const RazorPayModal = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return null;
  return (
    isVisible && (
      <div className="fixed top-0 left-0 w-full h-full bg-[#000000c6] z-40">
        <section className="modal fixed top-[50%] left-[50%] w-[80%] h-[80%] bg-white shadow-lg flex items-center justify-between z-50 transform -translate-x-1/2 -translate-y-1/2 rounded-[12px] border border-gray-200">
          {/* Left Panel - Branding */}

          <Timer></Timer>

          <button
            onClick={() => setIsVisible(false)}
            className="cross absolute top-[3%] cursor-pointer right-[4%] w-8 bg-[#af053225] rounded-full"
          >
            <img src={cross} alt="Close" className="cross w-full" />
          </button>

          <div className="leftcontent relative h-full flex flex-col justify-start items-center gap-6 w-[60%] bg-[#0D94FB] p-6 text-white rounded-l-[12px]">
            {/* Logo and Title */}
            <div className="title flex justify-center items-center gap-4">
              <div className="image bg-white w-16 p-2 rounded-md">
                <img
                  src={logo}
                  alt="Indian Post Logo"
                  className="object-fill"
                />
              </div>
              <p className="heading font-bold text-lg">SpeedPost Courier</p>
            </div>

            {/* Price Summary */}
            <div className="price-summary bg-[#012652] p-4 w-full rounded-md flex flex-col items-center text-white">
              <p className="text-sm">Price Summary</p>
              <p className="text-2xl font-bold">₹21</p>
            </div>

            {/* Mobile Number */}
            <div className="phone bg-white text-black p-3 w-full rounded-md flex justify-center items-center">
              <span className="font-medium text-[#012652]">
                Pay Using our Secure Gateway
              </span>
            </div>

            {/* Razorpay Security */}
            <div className="mt-auto text-sm opacity-90">
              Secured by <span className="font-bold">Razorpay</span>
            </div>

            {/* Background Image */}
            <img
              src={logobig}
              alt="Illustration"
              className="absolute bottom-0 w-[80%] right-0 opacity-50"
            />
          </div>

          {/* Right Panel - Payment Options */}
          <div className="rightcontent h-full w-[70%] flex flex-col bg-gray-50 p-6 rounded-r-[12px]">
            <h2 className="text-lg font-bold">Payment Options</h2>

            {/* Payment Options List */}
            <div className="payment-methods flex flex-col gap-4 mt-4">
              {/* Recommended - UPI */}
              <div className="flex justify-between items-center bg-blue-100 p-4 rounded-md cursor-not-allowed">
                <p className="font-semibold">UPI</p>
              </div>

              {/* Cards */}
              <div className="flex justify-between items-center text-white bg-[#0D94FB] p-4 rounded-md cursor-pointer">
                <p className="font-semibold">Cards</p>
                <div className="flex gap-2 bg-white px-4 py-2 rounded-[2px]">
                  <img src={visa} alt="Visa" className="w-8 h-5 " />
                  <img src={mastercard} alt="Mastercard" className="w-8 h-5 " />
                  <img src={rupay} alt="RuPay" className="w-8 h-5 " />
                </div>
              </div>

              {/* Netbanking */}
              <div className="flex justify-between items-center bg-blue-100 p-4 rounded-md cursor-not-allowed">
                <p className="font-semibold">Netbanking</p>
                <div className="flex gap-2">
                  {/* <img src={netbank1} alt="Bank 1" className="w-8 h-5" />
              <img src={netbank2} alt="Bank 2" className="w-8 h-5" /> */}
                </div>
              </div>

              {/* Wallet */}
              <div className="flex justify-between items-center bg-blue-100 p-4 rounded-md cursor-not-allowed">
                <p className="font-semibold">Wallet</p>
                <div className="flex gap-2">
                  {/* <img src={wallet1} alt="Wallet 1" className="w-8 h-5" />
              <img src={wallet2} alt="Wallet 2" className="w-8 h-5" /> */}
                </div>
              </div>

              {/* Pay Later */}
              <div className="flex justify-between items-center bg-blue-100 p-4 rounded-md cursor-not-allowed">
                <p className="font-semibold">Pay Later</p>
                <div className="flex gap-2">
                  {/* <img src={paylater1} alt="PayLater 1" className="w-8 h-5" />
              <img src={paylater2} alt="PayLater 2" className="w-8 h-5" /> */}
                </div>
              </div>

              {/* Add New Card */}
            </div>
          </div>

          <div className="3rdcontent relative flex flex-col w-full items-start justify-start gap-4 p-6">
            <CardForm></CardForm>
          </div>
        </section>
      </div>
    )
  );
};

export default RazorPayModal;
