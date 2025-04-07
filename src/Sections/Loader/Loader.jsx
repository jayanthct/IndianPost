import { motion } from "framer-motion";
import logo from "../Assets/postlogo.png";
import { React } from "react";

const Loader = () => {
  return (
    <div className="flex justify-center flex-col gap-12 items-center min-h-screen bg-white z-50 ">
      <p className="text font-medium text-[18px] text-red-800">Redirecting to Secure Payment Gateway.......🔒</p>

      <div className="relative w-32 h-32 flex justify-center items-center">
        {/* Circular Spinner */}
        <motion.div
          className="absolute w-full h-full border-[6px] border-transparent border-t-red-800 border-b-red-800 rounded-full will-change-transform"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />

        {/* Logo */}
        <img src={logo} alt="Logo" className="absolute w-12 h-12" />
      </div>
    </div>
  );
};

export default Loader;
