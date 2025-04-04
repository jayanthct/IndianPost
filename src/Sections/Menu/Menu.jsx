import React from "react";

const Sidebar = () => {
  const menuItems = [
    "About Us",
    "Performance Dashboard",
    "Mails & Stamps",
    "Banking & Remittance",
    "NPS",
    "Insurance",
    "Business & Ecommerce",
    "Retail Services",
    "Prasadam (Holy Blessing)",
    "Tools & Help",
  ];

  return (
    <aside className="w-84 bg-white border-r h-screen pl-[16px]">
      {/* Sidebar Header */}
      <div className="p-4 font-semibold text-lg bg-red-800 border-b text-white">
        Menu
      </div>

      {/* Menu Items */}
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="p-3 border-b cursor-pointer transition-all text-red-800 font-bold duration-200 hover:bg-red-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
