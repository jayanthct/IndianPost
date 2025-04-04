import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faMapMarkerAlt,
  faHandPointer,
  faStamp,
  faLandmark,
  faBuildingColumns,
  faBank,
} from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const IconGrid = () => {
  const services = [
    { icon: faCalculator, text: "Calculate Postage" },
    { icon: faMapMarkerAlt, text: "Find Pincode" },
    { icon: faHandPointer, text: "Click n Book" },
    { icon: faStamp, text: "Buy Stamps" },
    { icon: faLandmark, text: "Locate Post Office" },
    { icon: faBuildingColumns, text: "Dak Karmayogi Portal" },
    { icon: faBank, text: "Dak Ghar Niryat Portal" },
    { icon: faBuildingColumns, text: "Post Office Savings Bank" },
    { icon: faBank, text: "India Post Payments Bank" },
    { icon: faHandHoldingHeart, text: "Postal Life Insurance" },
  ];

  return (
    <>
      <section className="icongrid flex flex-col justify-center items-center gap-6">
        <h1 className="font-bold text-2xl">Services</h1>
        <div className="grid grid-cols-5 gap-12 p-8 text-center text-red-700">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 hover:scale-[1.1] transition-all duration-100 ease-in cursor-pointer"
            >
              <FontAwesomeIcon icon={service.icon} size="3x" />
              <span className="text-sm text-black font-normal">
                {service.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default IconGrid;
