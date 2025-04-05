import React, { useState } from "react";
import visaLogo from "../visa.png"; // Add actual path
import mastercardLogo from "../mastercard.png"; // Add actual path
import rupayLogo from "../rupay.png"; // Add actual path

import { v4 as uuidv4 } from "uuid";

const CardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [cardType, setCardType] = useState("");

  const logos = {
    visa: visaLogo,
    mastercard: mastercardLogo,
    rupay: rupayLogo,
  };

  const detectCardType = (number) => {
    const clean = number.replace(/\s+/g, "");

    if (/^4[0-9]{6,}$/.test(clean)) return "visa";
    if (
      /^(5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,})$/.test(
        clean
      )
    )
      return "mastercard";
    if (/^6(?!011)(?:0[0-9]{14}|52[12][0-9]{12})$/.test(clean)) return "rupay";

    return "";
  };

  const validateCard = (num) => {
    const digits = num.replace(/\s+/g, "");
    let sum = 0;
    let shouldDouble = false;

    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = parseInt(digits[i]);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const handleCardInput = (e) => {
    let value = e.target.value.replace(/\D/g, "").substring(0, 16); // Only digits
    let formatted =
      value
        .match(/.{1,4}/g)
        ?.join(" ")
        .trim() || "";
    setCardNumber(formatted);

    const type = detectCardType(value);
    setCardType(type);
  };

  const validateForm = () => {
    let tempErrors = {};

    const cleanCard = cardNumber.replace(/\s+/g, "");
    if (!/^\d{16}$/.test(cleanCard) || !validateCard(cleanCard)) {
      tempErrors.card = "Invalid card number";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
      tempErrors.expiry = "Invalid expiry date";
    }

    if (!/^\d{3}$/.test(cvv)) {
      tempErrors.cvv = "CVV must be 3 digits";
    }

    if (name.trim() === "") {
      tempErrors.name = "Name is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Create cookie valid for 1 day
      const uniqueId = uuidv4();
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 1);
      document.cookie = `formToken=${uniqueId}; expires=${expiryDate.toUTCString()}; path=/`;

      const url ="";
      const result = axios.post(url,body,{headers:application/json})

    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 border border-gray-300 rounded-md w-full"
    >
      <p className="text-gray-700 mb-2 font-semibold">Add a new card</p>

      <div className="relative">
        <input
          type="text"
          placeholder="4111 1111 1111 1111"
          className={`w-full border p-2 rounded-md pr-12 ${
            errors.card ? "border-red-500" : "border-[#01255296]"
          }`}
          value={cardNumber}
          onChange={handleCardInput}
        />
        {cardType && (
          <img
            src={logos[cardType]}
            alt={cardType}
            className="absolute right-3 top-2 h-6 w-10 object-contain"
          />
        )}
      </div>
      {errors.card && (
        <p className="text-red-500 text-sm mt-1">{errors.card}</p>
      )}

      <div className="flex gap-2 mt-2">
        <input
          type="text"
          placeholder="MM / YY"
          className={`border p-2 rounded-md w-full ${
            errors.expiry ? "border-red-500" : "border-gray-300"
          }`}
          value={expiry}
          onChange={(e) => {
            let val = e.target.value;

            // Remove everything except digits
            val = val.replace(/\D/g, "");

            // If 2 digits typed, add slash
            if (val.length === 2 && expiry.length === 1) {
              val += "/";
            } else if (val.length > 2) {
              val = val.slice(0, 2) + "/" + val.slice(2);
            }

            // Limit to 5 characters max
            if (val.length > 5) {
              val = val.slice(0, 5);
            }

            setExpiry(val);
          }}
          maxLength={5}
        />

        <input
          type="password"
          placeholder="CVV"
          className={`border p-2 rounded-md w-full ${
            errors.cvv ? "border-red-500" : "border-gray-300"
          }`}
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength={3}
        />
      </div>
      {errors.expiry && (
        <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
      )}
      {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}

      <input
        type="text"
        placeholder="Name on Card"
        className={`border p-2 rounded-md w-full mt-4 ${
          errors.name ? "border-red-500" : "border-gray-300"
        }`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
      )}

      <input
        type="email"
        className="p-3 w-full rounded-md border mt-4"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="metadeta flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <label>Save this card as per RBI guidelines</label>
        </div>

        <button className="bg-[#0D94FB] hover:bg-[#0d50fb] cursor-pointer text-white w-full p-3 rounded-md font-semibold">
          Continue
        </button>
      </div>
    </form>
  );
};

export default CardForm;
